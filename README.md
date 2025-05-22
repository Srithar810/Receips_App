# 🍽️ Receipe App - Backend (Node.js + Express + MongoDB)

This is a simple **CRUD API** built using **Express**, **MongoDB**, and **Mongoose**. It allows users to Create, Read, Update, and Delete receipes.

---
click Here https://documenter.getpostman.com/view/40880873/2sB2qahgcx


## 🚀 Features

- Add a new receipe ✅  
- View all receipes ✅  
- View a single receipe by ID ✅  
- Update an existing receipe ✅  
- Delete a receipe ✅  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (with Mongoose)  
- dotenv  
- CORS  

---

## 📁 Folder Structure
Receipe_App/
│
├── Controllers/
│ └── receipeController.js
│
├── Database/
│ └── dbConfig.js
│
├── Models/
│ └── receipeSchema.js
│
├── Routers/
│ └── receipeRouter.js
│
├── .env
├── index.js
├── package.json
└── README.md


## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Receipe_App.git
cd Receipe_App

### 2. Install Dependencies
npm install

3. Setup Environment Variables

Create a .env file in the root folder:

PORT=5000
MONGODB_URL=your_mongodb_connection_string

4. Run the Server
npm start
Or if you're using nodemon:
npm run dev

🧪 API Endpoints
| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/receipes`     | Create a new receipe |
| GET    | `/api/receipes`     | Get all receipes     |
| GET    | `/api/receipes/:id` | Get receipe by ID    |
| PUT    | `/api/receipes/:id` | Update receipe by ID |
| DELETE | `/api/receipes/:id` | Delete receipe by ID |

📌 Example Receipe JSON
{
  "name": "Pasta",
  "description": "Delicious creamy white sauce pasta",
  "quantity": 2,
  "price": 200
}
