### Node.js API + MongoDB - User Lookup

This simple Express API connects to a MongoDB database and retrieves user data by ID via a GET endpoint at `/users/:id`. It returns the user's details only if they are over 21 and gracefully handles invalid IDs and not-found errors.


**Node.js API + MongoDB – User Lookup Service**

📋 Overview

This project is a simple Node.js and Express API that connects to a MongoDB database to retrieve user data by their ObjectId. It includes basic validation and a unique constraint: only users older than 21 are returned. It also handles invalid ID formats and non-existent users gracefully.

✅ Features

GET endpoint at /users/:id

Only returns users where age > 21

Returns 404 Not Found if user doesn’t exist or is underage

Returns 400 Bad Request if the provided ID is not a valid MongoDB ObjectId

Uses .env for secure configuration

🛠️ Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install Dependencies

npm install

3. Create a .env File

Create a .env file in the root of the project and add:

MONGO_URI=mongodb://localhost:27017/userdb
PORT=3000

Replace MONGO_URI with your own connection string if using MongoDB Atlas or another host.

4. Start the Server

node server.js

5. Make a Request

Send a GET request to:

http://localhost:3000/users/:id

Replace :id with a valid MongoDB ObjectId for a user over age 21.

🧪 Sample Document

{
  "_id": "60f7d6e8a2c4a45b341f4c7b",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

