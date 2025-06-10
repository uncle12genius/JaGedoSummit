import React from 'react';

const schedule = [
  {
    time: '09:00 AM',
    title: 'Opening Ceremony',
    speaker: 'Host & Guest Speakers',
    venue: 'Main Hall',
  },
  {
    time: '10:00 AM',
    title: 'The Future of Construction Tech',
    speaker: 'Dr. A. Karanja',
    venue: 'Conference Room 1',
  },
  {
    time: '11:30 AM',
    title: 'Smart Building Innovations',
    speaker: 'Jane Otieno',
    venue: 'Tech Arena',
  },
  {
    time: '01:00 PM',
    title: 'Networking Lunch',
    speaker: '',
    venue: 'Outdoor Pavilion',
  },
  {
    time: '02:30 PM',
    title: 'Investor Pitch Panel',
    speaker: 'Various Startups',
    venue: 'Main Stage',
  },
  {
    time: '04:00 PM',
    title: 'Closing Remarks & Awards',
    speaker: 'Event Chairperson',
    venue: 'Main Hall',
  },
];

const Schedule= () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Event Schedule</h2>
        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="text-blue-900 font-semibold text-lg w-32">{item.time}</div>
              <div className="flex-1 md:px-6">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                {item.speaker && (
                  <p className="text-sm text-gray-600">Speaker: {item.speaker}</p>
                )}
              </div>
              <div className="text-sm text-gray-600 mt-2 md:mt-0">{item.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
