from fastapi import FastAPI
from app.routers import tasks
from app.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware

# Initialize database
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include routes
app.include_router(tasks.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific origins if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)