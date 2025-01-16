import { useState, useEffect } from 'react';

interface Summary {
    completed: number;
    pending: number;
}

export default function Dashboard() {
    const [summary, setSummary] = useState<Summary>({ completed: 0, pending: 0 });

    useEffect(() => {
        fetch('/api/tasks/summary')
            .then((res) => res.json())
            .then((data) => setSummary(data));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p>Completed Tasks: {summary.completed}</p>
            <p>Pending Tasks: {summary.pending}</p>
        </div>
    );
}
