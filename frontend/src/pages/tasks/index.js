import { useState, useEffect } from "react";
import Link from "next/link";
//import { useRouter } from "next/router";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  //const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const toggleCompletion = async (id, completed) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link href="/tasks/new">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Task
        </button>
      </Link>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border p-4 mb-2 rounded flex justify-between items-center"
        >
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Title: <span className="font-medium">{task.title}</span>
            </h2>
            <p className="text-gray-600 mb-2">
              Description: <span className="font-normal">{task.description}</span>
            </p>
            <p
              className={`font-semibold ${
                task.completed ? "text-green-600" : "text-red-600"
              }`}
            >
              Status: {task.completed ? "Completed" : "Pending"}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded ${
                task.completed ? "bg-green-500" : "bg-gray-500"
              } text-white`}
              onClick={() => toggleCompletion(task.id, task.completed)}
            >
              {task.completed ? "Mark as Pending" : "Mark as Completed"}
            </button>
            <Link
              href={{
                pathname: `/tasks/${task.id}`,
                query: { title: task.title, description: task.description },
              }}
            >
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Edit
              </button>
            </Link>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  function handleDelete(id) {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    });
  }
}
