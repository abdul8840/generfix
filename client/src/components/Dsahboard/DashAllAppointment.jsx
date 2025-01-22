import React, { useEffect, useState } from 'react';
import { Modal, Table, Button } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const DashAllAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [appointmentIdToDelete, setAppointmentIdToDelete] = useState('');
  const [startIndex, setStartIndex] = useState(0); // Keep track of where to start fetching

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`/api/appointments/getallappointments?startIndex=${startIndex}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${document.cookie.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching appointments');
        }

        const data = await response.json();
        setAppointments((prev) => [...prev, ...data]);

        if (data.length < 9) {
          setShowMore(false);  // If less than 9 appointments returned, hide the "Show More" button
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [startIndex]); // Dependency array is the startIndex

  const handleShowMore = () => {
    setStartIndex((prevIndex) => prevIndex + 9); // Increase start index for the next fetch
  };

  const handleDeleteAppointment = async () => {
    try {
      const res = await fetch(`/api/appointments/delete/${appointmentIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${document.cookie.access_token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setAppointments((prev) => prev.filter((appointment) => appointment._id !== appointmentIdToDelete));
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div className="w-full bg-white table-auto overflow-x-auto md:mx-auto p-3">
      {appointments.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Created At</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>Service Type</Table.HeadCell>
              <Table.HeadCell>Selected Services</Table.HeadCell>
              <Table.HeadCell>Date & Time Slot</Table.HeadCell>
              <Table.HeadCell>Message</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="w-full">
              {appointments.map((appointment) => (
                <Table.Row key={appointment._id}>
                  <Table.Cell>{new Date(appointment.createdAt).toLocaleString()}</Table.Cell>
                  <Table.Cell>{appointment.name}</Table.Cell>
                  <Table.Cell>{appointment.email}</Table.Cell>
                  <Table.Cell>{appointment.phone}</Table.Cell>
                  <Table.Cell>{appointment.serviceType}</Table.Cell>
                  <Table.Cell>{appointment.selectedServices}</Table.Cell>
                  <Table.Cell>{new Date(appointment.date).toLocaleDateString()}, {appointment.timeSlot.startTime} - {appointment.timeSlot.endTime}</Table.Cell>
                  <Table.Cell>{appointment.message}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setAppointmentIdToDelete(appointment._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>No appointments available!</p>
      )}

      <Modal show={showModal} onClose={() => setShowModal(false)} popup size="md">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500">Are you sure you want to delete this appointment?</h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteAppointment}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashAllAppointment;
