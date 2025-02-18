import React from 'react';
import { useNavigate } from 'react-router-dom';

const Timeline = ({ events }) => {
  const navigate = useNavigate();

  // Sort events by date
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

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

  return (
    <div>
      <h1>Timeline</h1>
      {Object.keys(eventsByYearMonth).map(year => (
        <div key={year}>
          <h2>{year}</h2>
          {Object.keys(eventsByYearMonth[year]).map(month => (
            <div key={month}>
              <h3>{month}</h3>
              <ul>
                {eventsByYearMonth[year][month].map(event => (
                  <li key={`${event.id}-${event.type || 'single'}`}>
                    {event.name} {event.type && `(${event.type})`}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <div>
        <button onClick={() => navigate('/eventsList')}>Back to Events</button>
      </div>
    </div>
  );
};

export default Timeline;