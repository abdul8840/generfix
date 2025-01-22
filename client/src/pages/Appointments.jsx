import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Alert,
  Button,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useSelector } from "react-redux";

const Appointments = ({ token, onlineServices, repairServices, itServices }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    selectedServices: [],
    date: new Date(),
    timeSlot: {
      startTime: "",
      endTime: "",
    },
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceTypeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: e.target.value,
      selectedServices: [],
    }));
  };

  const handleServiceSelection = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedServices = checked
        ? [...prev.selectedServices, value]
        : prev.selectedServices.filter((service) => service !== value);
      return { ...prev, selectedServices: updatedServices };
    });
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointments/create-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setIsModalOpen(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          selectedServices: [],
          date: new Date(),
          timeSlot: {
            startTime: "",
            endTime: "",
          },
          message: "",
        });
      } else {
        setError(result.message || "Failed to create appointment.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  const getServicesByType = () => {
    switch (formData.serviceType) {
      case "Online Service":
        return onlineServices;
      case "IT Solution Services":
        return itServices;
      case "Repair Service":
        return repairServices;
      default:
        return [];
    }
  };

  return (
    <section className="max-w-3xl mx-auto">
      <div className="mt-[55px]">
        <h2 className="text-2xl font-bold text-headingColor text-center">
          Create Appointment
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-5 mx-5">
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <Label value="Your Name" />
              <TextInput
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full">
              <Label value="Your Email" />
              <TextInput
                type="email"
                name="email"
                placeholder="example123@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <Label value="Phone Number" />
              <TextInput
                type="text"
                name="phone"
                placeholder="+1 20230340400"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full">
              <Label value="Select Your Service Type" />
              <Select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleServiceTypeChange}
                required
              >
                <option value="">Select Service Type</option>
                <option value="Online Service">Online Service</option>
                <option value="IT Solution Services">IT Solution Services</option>
                <option value="Repair Service">Repair Service</option>
              </Select>
            </div>
          </div>

          {formData.serviceType && (
            <div className="space-y-2">
              <p className="font-semibold">Select Services:</p>
              <div className="flex gap-4 overflow-x-auto">
                {getServicesByType().map((service) => (
                  <label
                    key={service.name}
                    className="block border rounded-lg p-4 bg-gray-100 hover:bg-blue-100 transition cursor-pointer min-w-[150px]"
                  >
                    <input
                      type="checkbox"
                      value={service.name}
                      checked={formData.selectedServices.includes(service.name)}
                      onChange={handleServiceSelection}
                      className="block mx-auto"
                    />
                    <p className="mt-5 text-center">{service.name}</p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {formData.serviceType === "Repair Service" && (
            <div className="space-y-2">
              <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full flex flex-col">
                  <Label value="Select Date" />
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    className="bg-gray-50 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="w-full">
                  <Label value="Choose Time Slot" />
                  <div className="w-full flex gap-2">
                    <TextInput
                      type="time"
                      name="startTime"
                      value={formData.timeSlot.startTime}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          timeSlot: { ...prev.timeSlot, startTime: e.target.value },
                        }))
                      }
                      required
                    />
                    <TextInput
                      type="time"
                      name="endTime"
                      value={formData.timeSlot.endTime}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          timeSlot: { ...prev.timeSlot, endTime: e.target.value },
                        }))
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full">
            <Label value="Message" />
            <Textarea
              name="message"
              placeholder="Type Your Message..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={3}
            />
          </div>

          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </Button>

          {error && <Alert color="failure">{error}</Alert>}
        </form>
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Thank You!</Modal.Header>
        <Modal.Body>
          <p>Your appointment has been successfully created!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Appointments;
