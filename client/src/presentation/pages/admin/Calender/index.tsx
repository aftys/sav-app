import { useState } from 'react';
import './Calender.css'// Import CSS for styling (you can customize it)

const Calender = () => {
  // State for managing appointments
  const [appointments, setAppointments] = useState([
    // { id: 1, date: '2024-01-30', time: '10:00 AM', description: 'Meeting with John' },
    { id: 2, date: '2024-01-31', time: '13:00', description: 'standart', user: 'Oussama AFTYS' }

  ]);

  // State for managing new appointment form
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    description: ''
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  // Handle form submission to add new appointment
  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (!newAppointment.date || !newAppointment.time || !newAppointment.description) return;
    const id = Math.max(...appointments.map(appointment => appointment.id), 0) + 1;
    setAppointments([...appointments, { id, ...newAppointment }]);
    setNewAppointment({ date: '', time: '', description: '' });
  };

  // Handle deleting an appointment
  const handleDeleteAppointment = (id:string) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendar</h2>
      <div className="appointment-form">
        <h3 className="newapp-title">Add a new appointment</h3>
        <form onSubmit={handleAddAppointment}>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={newAppointment.date} onChange={handleInputChange} />
          </div>
          <div>
            <label>Time:</label>
            <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} />
          </div>
          <div>
            <label>Type:</label>
            <input type="text" name="type" value={newAppointment.description} onChange={handleInputChange} />
          </div>
          <button className="add-appointment-button" type="submit">Add Appointment</button>
        </form>
      </div>
      <div className="appointment-list">
        <h3>Appointments</h3>
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              <span>{appointment.date} {appointment.time}</span>
              <span>{appointment.description}</span>
              <span>{appointment.user}</span>
              <span>validé</span>
              <button className='bg-green-500' onClick={() => handleDeleteAppointment(appointment.id)}>annuler</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calender;