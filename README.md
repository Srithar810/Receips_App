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
git clone https://github.com/Srithar810/Receips_App/tree/main.git
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


-------POSTMAN------ 
📌 1. Create a Receipe
Method: POST
URL: /api/receipes/createReceipe
Headers:
Content-Type: application/json

Body (JSON):

{
"name": "Pasta",
"description": "Creamy white sauce pasta",
"quantity": 2,
"price": 250
}
Success Response:
{
"message": "Receipe Added Sucessfully",
"data": {
"_id": "generated_id",
"name": "Pasta",
"description": "Creamy white sauce pasta",
"quantity": 2,
"price": 250
}
}



📌 2. Get All Receipes
Method: GET
URL: /api/receipes/getAllReceipes
Success Response:
  {
  "message": "Receipe Retrieved Sucessfullly",
  "data": [
  {
  "_id": "id1",
  "name": "Pasta",
  "description": "Creamy white sauce pasta",
  "quantity": 2,
  "price": 250
  },
  ...
  ]
  }




📌 3. Get Receipe by ID
Method: GET
URL: /api/receipes/getReceipeById/:id
Success Response:

{
"message": "Receipe Retrieved Sucessfullly",
"data": {
"_id": "id",
"name": "Pasta",
"description": "Creamy white sauce pasta",
"quantity": 2,
"price": 250
}
}



📌 4. Update a Receipe
Method: PUT
URL: /api/receipes/updateReceipe/:id
Headers:
Content-Type: application/json

Body (JSON):

{
"name": "Pizza",
"description": "Cheesy pepperoni pizza",
"quantity": 1,
"price": 300
}
Success Response:
{
"message": "Receipe Updated Sucessfully",
"data": {
"_id": "id",
"name": "Pizza",
"description": "Cheesy pepperoni pizza",
"quantity": 1,
"price": 300
}
}





📌 5. Delete a Receipe
Method: DELETE
URL: /api/receipes/deleteReceipe/:id
Success Response:

{
"message": "Receipe Deleted Sucessfully",
"data": [
{
"_id": "remaining_id",
"name": "Other Receipe",
...
}
]
}



