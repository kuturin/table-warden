import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Timeline = ({ events }) => {
  const navigate = useNavigate();
  const [expandedEventId, setExpandedEventId] = useState(null);

  console.log('Events:', events); // Dodaj to logowanie

  // Sort events by date
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log('Sorted Events:', sortedEvents); // Dodaj to logowanie

  // Group events by year and month
  const eventsByYearMonth = sortedEvents.reduce((acc, event) => {
    const startDate = new Date(event.date);
    const startYear = startDate.getFullYear();
    const startMonth = startDate.toLocaleString('en-US', { month: 'long' });

    if (!acc[startYear]) {
      acc[startYear] = {};
    }
    if (!acc[startYear][startMonth]) {
      acc[startYear][startMonth] = [];
    }

    if (event.endDate) {
      const endDate = new Date(event.endDate);
      const endYear = endDate.getFullYear();
      const endMonth = endDate.toLocaleString('en-US', { month: 'long' });

      if (startYear !== endYear || startMonth !== endMonth) {
        acc[startYear][startMonth].push({ ...event, type: 'start' });

        if (!acc[endYear]) {
          acc[endYear] = {};
        }
        if (!acc[endYear][endMonth]) {
          acc[endYear][endMonth] = [];
        }
        acc[endYear][endMonth].push({ ...event, type: 'end' });
      } else {
        acc[startYear][startMonth].push(event);
      }
    } else {
      acc[startYear][startMonth].push(event);
    }

    return acc;
  }, {});

  console.log('Events by Year and Month:', eventsByYearMonth); // Dodaj to logowanie

  const toggleExpand = (eventId) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId);
  };

  return (
    <div>
      <h1>Timeline</h1>
      {Object.keys(eventsByYearMonth).map(year => (
        <div key={year}>
          <h2>Year: {year}</h2>
          {Object.keys(eventsByYearMonth[year]).map(month => (
            <div key={month}>
              <h3>{month}</h3>
              <ul>
                {eventsByYearMonth[year][month].map(event => (
                  <li key={`${event.id}-${event.type || 'single'}`}>
                    <div onClick={() => toggleExpand(event.id)}>
                      {event.name} {event.type && `(${event.type})`}
                    </div>
                    {expandedEventId === event.id && (
                      <div>
                        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                        {event.endDate && <p>Ending Date: {new Date(event.endDate).toLocaleDateString()}</p>}
                        <p>{event.description}</p>
                        <button onClick={() => navigate(`/eventsEdit/${event.id}`)}>Edit</button>
                        <button onClick={() => navigate(`/eventsView/${event.id}`)}>View</button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <div>
        <button onClick={() => navigate('/eventsList')}>Back to Events</button>
        <button onClick={() => navigate('/calendar')}>Go to Calendar</button> {/* Dodano przycisk przejścia do kalendarza */}
      </div>
    </div>
  );
};

export default Timeline;