import { useEffect, useState } from "react";

export default function MainPage() {
  const [stats, setStats] = useState({ count: 0, earliest: "", latest: "" });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/event-stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Failed to fetch stats:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to the Event App</h1>
        <p className="text-gray-700 mb-2">
          This application allows you to add and manage your events.This WebSite helps you keep everything in one place.
        </p>
        <p className="text-gray-700 mb-6">
          Navigate through the app using the menu above to create and edit events.
        </p>
        <img src="/event_image.jpg" alt="Event" className="mx-auto my-6 w-72 rounded shadow" />
        <p className="text-lg text-gray-800">
          You have <span className="font-semibold">{stats.count}</span> important events between{" "}
          <span className="font-semibold">{stats.earliest}</span> and{" "}
          <span className="font-semibold">{stats.latest}</span>.
        </p>
      </div>
    </div>
  );
}