import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UpdateTask() {
  const router = useRouter();
  const { id, title, description } = router.query; // Get query params

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true); // State for loading

  useEffect(() => {
    if (router.isReady) {
      if (title && description) {
        setTaskTitle(title);
        setTaskDescription(description);
      }
      setIsLoading(false); // Set loading to false when the query is ready
    }
  }, [router.isReady, title, description]); // Watch router.isReady

  const handleUpdate = async () => {
    const updatedTask = {
      title: taskTitle,
      description: taskDescription,
    };

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    router.push("/tasks"); // Redirect to task list page after update
  };

  // Show loading state until query parameters are ready
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Update Task</h2>
      <label className="block text-gray-700 font-medium mb-2">Title</label>
      <input
        type="text"
        className="w-full border p-2 rounded mb-4"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <label className="block text-gray-700 font-medium mb-2">Description</label>
      <textarea
        className="w-full border p-2 rounded mb-4"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleUpdate}
      >
        Update Task
      </button>
    </div>
  );
}
