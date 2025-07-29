import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    note: ""
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/events/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update event");
        return res.json();
      })
      .then(() => navigate("/events"))
      .catch(err => alert("Error: " + err.message));
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <div className="flex justify-between items-center mb-6"></div>
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 w-full" required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} className="border p-2 w-full" required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="note" placeholder="Note" value={formData.note} onChange={handleChange} className="border p-2 w-full" rows={4} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Event</button>
      </form>
    </div>
    </div>
  );
}

