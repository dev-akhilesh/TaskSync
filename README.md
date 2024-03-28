# TaskSync

This is a React application for managing tasks. Users can view, add, update, and delete tasks. Additionally, the application includes user registration, login, and profile management features.

## Deployment

Backend deployment :- https://tasksync-8zvq.onrender.com/

Frontend deployment :- https://tasksync-8zvq.onrender.com/

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features

- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Chakra Ui
- Node.js
- Express.js
- React
- Redux
- Mongodb
- Firebase

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- react-icon
- react-hot-toast
- Chakra ui
- Tailwind Css

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB/Atlas database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies in frontend and backend directories.

   ```sh
   npm run install
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

   ```
   MONGO_URI = mongodb+srv://<username>:<password>@cluster0.47wrssa.mongodb.net/TechSync

   JWT_SECRET = "Your secret key"
   ```

3. Start the application

   - Backend

   ```sh
   npm run server
   ```

   - Frontend

   ```sh
   npm run start
   ```

4. Go to http://localhost:3000 -- Frontend Local Server
5. Got to http://localhost:8080 --- Backend Local Server

## Backend API

<pre>
- POST     /user/addUser
- POST     /user/login
- GET     /user
- PATCH    /user/editUser/:id
- GET      /task/getTask
- GET      /api/tasks/:taskId
- POST     /api/createTask
- GET    /api/getTaskbyId/:id
- PATCH      /api//updatetask/:id
- DELETE   /api//deleteTask/:id
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /TaskComp/Task.jsx      Add new task
- /TaskComp/Taskitem.jsx     Get All task
- /TaskComp/TaskCard.jsx     Display All task.
</pre>

## npm scripts

Inside frontend folder:

- `npm run install`: Installs all dependencies and dev-dependencies required for frontend
- `npm start`: Starts frontend in development mode

Inside backend folder:

- `npm run install`: Installs all dependencies and dev-dependencies required for backend
- `npm run server`: Starts backend .

## Useful Links

- This project

  - Github Repo: https://github.com/dev-akhilesh/TaskSync

- Official Docs
  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world

## Contact

- Email: akhileshtakawale703@gmail.com
- Linkedin:
