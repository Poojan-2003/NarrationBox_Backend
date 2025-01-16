export async function fetchTasks() {
    const response = await fetch('/api/tasks');
    return response.json();
}

export async function fetchSummary() {
    const response = await fetch('/api/tasks/summary');
    return response.json();
}

export async function addTask(task: { title: string; description: string }) {
    await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
}
