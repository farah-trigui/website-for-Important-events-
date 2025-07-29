import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/event-stats-data')
      .then((res) => res.json())
      .then((data) => setEvents(data)) 
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">

    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-blue-700">Important Events</h2>
        <Link
          to="/events/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          New Event
        </Link>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-100 text-left text-blue-900">
            <th className="p-3">Date</th>
            <th className="p-3">Title</th>
            <th className="p-3">Location</th>
            <th className="p-3">Note</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event: any) => (
            <tr key={event.id} className="border-b hover:bg-blue-50">
              <td className="p-3">{event.date}</td>
              <td className="p-3">{event.title}</td>
              <td className="p-3">{event.location}</td>
              <td className="p-3">{event.note}</td>
              <td className="p-3">
                <Link
                  to={`/events/edit/${event.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}

          {events.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500">
                No important events found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}
