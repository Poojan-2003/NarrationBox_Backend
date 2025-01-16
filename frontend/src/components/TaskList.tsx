import { useState, useEffect } from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetch('/api/tasks')
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="p-2 border-b">
                        <h2 className="text-lg font-semibold">{task.title}</h2>
                        <p>{task.description}</p>
                        <p>{task.completed ? 'Completed' : 'Pending'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
