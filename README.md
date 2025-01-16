# Task Manager Application

A modern, full-stack task management application built with Next.js frontend and FastAPI backend, featuring a clean UI and real-time updates.
![Screenshot (11)](https://github.com/user-attachments/assets/84fb65fc-e835-4bb8-9cfb-59ca3c5d7afd)
![Screenshot (12)](https://github.com/user-attachments/assets/2a6431db-d6f5-4153-a124-68c48a510913)
![Screenshot (13)](https://github.com/user-attachments/assets/d4ac6c85-78a2-4a1b-8439-fcfe3c3e7d5c)
![Screenshot (14)](https://github.com/user-attachments/assets/4c984226-6181-47b9-88d2-c6d99178e5e9)
![Screenshot (15)](https://github.com/user-attachments/assets/f6dc0c67-4b7d-447e-96ee-d006adb02489)


## 🌟 Features

- **Task Management**
  - Create, update, and delete tasks
  - Mark tasks as complete/incomplete
  - Real-time updates
  - Rich task details (title, description, due date, priority)

- **Dashboard**
  - Visual summary of tasks
  - Progress tracking
  - Task completion statistics
  - Priority distribution

- **User Experience**
  - Clean, intuitive interface
  - Responsive design
  - Dark/light mode support
  - Keyboard shortcuts

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 13 (App Router)
  - Tailwind CSS

- **Backend**
  - FastAPI
  - PostgreSQL
  - Python 3.8+

## 📦 Project Structure

```
├── backend/
│   ├── app/
│   │   ├── _pycache_/
│   │   ├── routers/
│   │   ├── __init__.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── schemas.py
│   ├── .env
│   ├── .gitignore
│   └── requirements.txt
├── frontend/
│   ├── .next/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   ├── tailwind.config.ts
│   └── tsconfig.json
```

## 🚀 Getting Started

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```
2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the FastAPI server**
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**


```
