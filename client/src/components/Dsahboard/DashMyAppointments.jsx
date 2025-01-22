import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner, Card } from "flowbite-react";

const DashMyAppointments = ({ token }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/appointments/get-appointment", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" aria-label="Loading appointments..." />
      </div>
    );
  }

  if (!appointments.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600">
          No recent appointments found.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <Card key={appointment._id} className="shadow-lg">
            <h3 className="text-xl font-bold text-gray-700">
              {currentUser.name}
            </h3>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(appointment.createdAt).toLocaleString()}
            </p>
            <div className="mb-4">
              <p className="text-base text-gray-700">
                <span className="font-semibold">Phone:</span> {appointment.phone}
              </p>
              <p className="text-base text-gray-700">
                <span className="font-semibold">Service Type:</span>{" "}
                {appointment.serviceType}
              </p>
              <p className="text-base text-gray-700">
                <span className="font-semibold">Selected Services:</span>{" "}
                {appointment.selectedServices.join(", ")}
              </p>
            </div>
            {appointment.serviceType === "Home Service" && (
              <div className="bg-gray-100 p-4 rounded-md">

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Date & Time Slot:</span>{" "} {new Date(appointment.date).toLocaleDateString()},
                  {`${appointment.timeSlot.startTime} - ${appointment.timeSlot.endTime}`}
                </p>

              </div>

            )}
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Message:</span>{" "}
              {appointment.message}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashMyAppointments;
