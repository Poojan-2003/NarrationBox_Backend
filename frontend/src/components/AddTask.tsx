import { useState } from 'react';

export default function AddTask() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description }),
        });
        alert('Task added!');
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Add Task</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Add Task
            </button>
        </form>
    );
}
