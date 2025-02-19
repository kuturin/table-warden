import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ events }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const event = events.find(event => new Date(event.date).toDateString() === date.toDateString());
    setSelectedEvent(event);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date, view }) => {
          const event = events.find(event => new Date(event.date).toDateString() === date.toDateString());
          return event ? <div style={{ backgroundColor: event.color, height: '5px' }}></div> : null;
        }}
      />
      {selectedEvent && (
        <div>
          <h3>Event Details</h3>
          <p><strong>Title:</strong> {selectedEvent.name}</p>
          <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
          {selectedEvent.endDate && <p><strong>End Date:</strong> {new Date(selectedEvent.endDate).toLocaleDateString()}</p>}
          <p><strong>Description:</strong> {selectedEvent.description}</p>
        </div>
      )}
      <div>
        <button onClick={() => navigate('/timeline')}>Go to Timeline</button> {/* Dodano przycisk przejścia do osi czasu */}
      </div>
    </div>
  );
};

export default MyCalendar;