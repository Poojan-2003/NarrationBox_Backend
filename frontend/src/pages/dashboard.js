import { useState, useEffect } from "react";

export default function Dashboard() {
  const [summary, setSummary] = useState({ completed: 0, pending: 0 });

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => res.json())
      .then((data) => setSummary(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-500 text-white p-4 rounded">
          <h2 className="text-xl">Completed Tasks</h2>
          <p>{summary.completed}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded">
          <h2 className="text-xl">Pending Tasks</h2>
          <p>{summary.pending}</p>
        </div>
      </div>
    </div>
  );
}
