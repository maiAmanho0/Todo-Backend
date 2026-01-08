# Todo-Backend
A simple backend project using Node.js and Express that demonstrates REST APIs, authentication, and task management.
# flow end-to-end
User (Postman / Frontend)
        |
        | HTTP Request (GET / POST / PUT / DELETE)
        ↓
Express Server
        ↓
Middleware (auth)
        ↓
Routes (logic)
        ↓
MongoDB (data)
        ↓
Response (JSON)
# Basic Project Structure
todo-backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── server.js
│
├── .env
├── package.json


