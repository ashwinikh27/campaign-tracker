A simple Campaign Tracker built with React, Node.js, and MongoDB that lets users add, view, update, and delete marketing campaigns.

Features :

-Add a new marketing campaign

-View all campaigns in a clean list

-Update campaign status (Active, Paused, Completed)

-Delete a campaign

Data stored persistently in MongoDB

Tech Stack :

Frontend: React, Axios, HTML, CSS
Backend: Node.js, Express
Database: MongoDB (Local or MongoDB Atlas)

Setup Instructions
1. Clone or Download the Project
git clone <your_repo_link>
cd campaign-tracker

2. Setup Backend
cd backend
npm install


Create a .env file inside backend/ with your MongoDB connection string:

MONGO_URI=mongodb://127.0.0.1:27017/campaignDB
PORT=5000


Start backend:

node server.js


Server will run on http://localhost:5000

3. Setup Frontend
cd ../frontend
npm install
npm start


Frontend will run on http://localhost:3000



The goal was to build a simple CRUD (Create, Read, Update, Delete) web app connecting a React frontend with a Node.js + MongoDB backend.
I focused on clear folder structure, simple design, and working functionality.
Through this task, I strengthened my understanding of REST APIs, React state management, and full-stack data flow.