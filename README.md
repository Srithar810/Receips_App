# 🍽️ Receipe App - Backend (Node.js + Express + MongoDB)

Develop a complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose. The application should follow the MVC pattern and include comprehensive API documentation using Postman.

---
click Here https://documenter.getpostman.com/view/40880873/2sB2qcBKxx


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
    "recipeName": "Pongal",
    "ingredients": [
      "1/2 cup rice",
      "1/4 cup moong dal",
      "1/2 tsp black pepper",
      "1/2 tsp cumin",
      "Few curry leaves",
      "1 inch ginger (chopped)",
      "2 tbsp ghee",
      "Cashews (optional)",
      "Salt to taste",
      "3 cups water"
    ],
    "instructions": [
      "Dry roast moong dal and combine with rice.",
      "Add water, salt, cook in pressure cooker (3 whistles).",
      "Heat ghee, fry cumin, pepper, ginger, and curry leaves.",
      "Add to cooked pongal and mix.",
      "Serve hot with coconut chutney."
    ]
  }



📌 2. Get All Receipes
Method: GET
URL: /api/receipes/getAllReceipes
Success Response:
 {
    "message": "Receipe Retrieved Sucessfullly",
    "data": [
        {
            "_id": "68555e875d4ee0bb5cd1405f",
            "recipeName": "Idli",
            "ingredients": [
                "2 cups idli rice",
                "1 cup urad dal",
                "1/2 tsp fenugreek seeds",
                "Salt to taste",
                "Water as needed"
            ],
            "instructions": [
                "Soak rice, urad dal, and fenugreek seeds separately for 6 hours.",
                "Grind to a smooth batter and mix together.",
                "Ferment overnight.",
                "Pour into greased idli molds.",
                "Steam for 10–12 minutes and serve with chutney/sambar."
            ],
            "createdAt": "2025-06-20T13:13:43.414Z",
            "updatedAt": "2025-06-20T13:13:43.414Z",
            "__v": 0
        },
        {
            "_id": "68555fa85d4ee0bb5cd14063",
            "recipeName": "Dosa",
            "ingredients": [
                "3 cups rice",
                "1 cup urad dal",
                "1/2 tsp fenugreek seeds",
                "Salt to taste",
                "Water as needed",
                "Oil for cooking"
            ],
            "instructions": [
                "Soak rice, urad dal, and fenugreek seeds for 6 hours.",
                "Grind to smooth batter and ferment overnight.",
                "Add salt and mix well.",
                "Pour a ladle of batter on hot tawa, spread thin.",
                "Drizzle oil and cook until golden and crisp.",
                "Serve with chutney and sambar."
            ],
            "createdAt": "2025-06-20T13:18:32.388Z",
            "updatedAt": "2025-06-20T13:18:32.388Z",
            "__v": 0
        },
        {
            "_id": "68555fb65d4ee0bb5cd14065",
            "recipeName": "Medu Vada",
            "ingredients": [
                "1 cup urad dal (soaked)",
                "1 green chili (chopped)",
                "1 inch ginger (chopped)",
                "Few curry leaves",
                "Salt to taste",
                "Oil for deep frying"
            ],
            "instructions": [
                "Grind soaked dal to thick, fluffy batter.",
                "Mix in chili, ginger, curry leaves, and salt.",
                "Wet hands, shape like donuts.",
                "Deep fry until golden brown.",
                "Serve with coconut chutney and sambar."
            ],
            "createdAt": "2025-06-20T13:18:46.171Z",
            "updatedAt": "2025-06-20T13:18:46.171Z",
            "__v": 0
        },
        {
            "_id": "68555fea5d4ee0bb5cd14067",
            "recipeName": "Lemon Rice",
            "ingredients": [
                "2 cups cooked rice",
                "1/2 tsp mustard seeds",
                "1/2 tsp urad dal",
                "1/2 tsp chana dal",
                "2 green chilies (sliced)",
                "Few curry leaves",
                "1/4 tsp turmeric",
                "Salt to taste",
                "Juice of 1 lemon",
                "2 tsp oil"
            ],
            "instructions": [
                "Heat oil, temper mustard, urad dal, chana dal.",
                "Add chilies, curry leaves, and turmeric.",
                "Add rice and mix well.",
                "Turn off heat, add lemon juice and salt.",
                "Mix and serve."
            ],
            "createdAt": "2025-06-20T13:19:38.326Z",
            "updatedAt": "2025-06-20T13:19:38.326Z",
            "__v": 0
        },
        {
            "_id": "68555fff5d4ee0bb5cd14069",
            "recipeName": "Rasam",
            "ingredients": [
                "2 tomatoes (crushed)",
                "1/2 tsp tamarind paste",
                "1/2 tsp black pepper",
                "1/2 tsp cumin",
                "2 garlic cloves (crushed)",
                "Few curry leaves",
                "1/4 tsp turmeric",
                "Salt to taste",
                "1 tsp mustard seeds",
                "1 tsp oil",
                "Fresh coriander for garnish"
            ],
            "instructions": [
                "Boil tomatoes, tamarind, pepper, cumin, turmeric, and salt.",
                "Simmer for 5–7 minutes.",
                "Heat oil, temper mustard seeds, garlic, and curry leaves.",
                "Add to rasam and garnish with coriander.",
                "Serve hot with rice."
            ],
            "createdAt": "2025-06-20T13:19:59.218Z",
            "updatedAt": "2025-06-20T13:19:59.218Z",
            "__v": 0
        },
        {
            "_id": "685560135d4ee0bb5cd1406b",
            "recipeName": "Upma",
            "ingredients": [
                "1 cup rava (semolina)",
                "2 cups water",
                "1 onion (chopped)",
                "1 green chili (chopped)",
                "1/2 tsp mustard seeds",
                "1/2 tsp urad dal",
                "Few curry leaves",
                "Salt to taste",
                "2 tsp oil or ghee"
            ],
            "instructions": [
                "Roast rava and keep aside.",
                "Heat oil, temper mustard, urad dal, chili, and curry leaves.",
                "Add onions and sauté.",
                "Add water and salt. Bring to boil.",
                "Slowly add rava while stirring. Cook until fluffy.",
                "Serve hot with chutney or sugar."
            ],
            "createdAt": "2025-06-20T13:20:19.506Z",
            "updatedAt": "2025-06-20T13:20:19.506Z",
            "__v": 0
        },
        {
            "_id": "685560585d4ee0bb5cd1406f",
            "recipeName": "Coconut Chutney",
            "ingredients": [
                "1 cup grated coconut",
                "2 tbsp roasted chana dal",
                "1 green chili",
                "1/2 inch ginger",
                "Salt to taste",
                "Water as needed",
                "1 tsp mustard seeds",
                "Few curry leaves",
                "1 dried red chili",
                "1 tsp oil"
            ],
            "instructions": [
                "Grind coconut, chana dal, chili, ginger, salt with water.",
                "Transfer to bowl.",
                "Heat oil, temper mustard, red chili, and curry leaves.",
                "Pour over chutney and serve."
            ],
            "createdAt": "2025-06-20T13:21:28.190Z",
            "updatedAt": "2025-06-20T13:21:28.190Z",
            "__v": 0
        },
        {
            "_id": "6855637612f07690a4a73c5c",
            "recipeName": "Tamarind Rice (Puliyodarai)",
            "ingredients": [
                "1 cup cooked rice",
                "1 tbsp tamarind paste",
                "1 tsp mustard seeds",
                "1 tsp chana dal",
                "1/2 tsp urad dal",
                "1 dried red chili",
                "1/4 tsp turmeric",
                "Few curry leaves",
                "Salt to taste",
                "2 tsp sesame oil"
            ],
            "instructions": [
                "Heat oil, temper mustard, chana dal, urad dal, chili, curry leaves.",
                "Add turmeric and tamarind paste. Cook until thick.",
                "Add salt and mix with rice.",
                "Let it rest 15 mins before serving."
            ],
            "createdAt": "2025-06-20T13:34:46.727Z",
            "updatedAt": "2025-06-20T13:34:46.727Z",
            "__v": 0
        }
    ]
}},
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
            "_id": "68555e875d4ee0bb5cd1405f",
            "recipeName": "Idli",
            "ingredients": [
                "2 cups idli rice",
                "1 cup urad dal",
                "1/2 tsp fenugreek seeds",
                "Salt to taste",
                "Water as needed"
            ],
            "instructions": [
                "Soak rice, urad dal, and fenugreek seeds separately for 6 hours.",
                "Grind to a smooth batter and mix together.",
                "Ferment overnight.",
                "Pour into greased idli molds.",
                "Steam for 10–12 minutes and serve with chutney/sambar."
            ],
            "createdAt": "2025-06-20T13:13:43.414Z",
            "updatedAt": "2025-06-20T13:13:43.414Z",
            "__v": 0
        },
        {
            "_id": "68555fa85d4ee0bb5cd14063",
            "recipeName": "Dosa",
            "ingredients": [
                "3 cups rice",
                "1 cup urad dal",
                "1/2 tsp fenugreek seeds",
                "Salt to taste",
                "Water as needed",
                "Oil for cooking"
            ],
            "instructions": [
                "Soak rice, urad dal, and fenugreek seeds for 6 hours.",
                "Grind to smooth batter and ferment overnight.",
                "Add salt and mix well.",
                "Pour a ladle of batter on hot tawa, spread thin.",
                "Drizzle oil and cook until golden and crisp.",
                "Serve with chutney and sambar."
            ],
            "createdAt": "2025-06-20T13:18:32.388Z",
            "updatedAt": "2025-06-20T13:39:14.531Z",
            "__v": 0
        },
        {
            "_id": "68555fea5d4ee0bb5cd14067",
            "recipeName": "Lemon Rice",
            "ingredients": [
                "2 cups cooked rice",
                "1/2 tsp mustard seeds",
                "1/2 tsp urad dal",
                "1/2 tsp chana dal",
                "2 green chilies (sliced)",
                "Few curry leaves",
                "1/4 tsp turmeric",
                "Salt to taste",
                "Juice of 1 lemon",
                "2 tsp oil"
            ],
            "instructions": [
                "Heat oil, temper mustard, urad dal, chana dal.",
                "Add chilies, curry leaves, and turmeric.",
                "Add rice and mix well.",
                "Turn off heat, add lemon juice and salt.",
                "Mix and serve."
            ],
            "createdAt": "2025-06-20T13:19:38.326Z",
            "updatedAt": "2025-06-20T13:19:38.326Z",
            "__v": 0
        },
        {
            "_id": "68555fff5d4ee0bb5cd14069",
            "recipeName": "Rasam",
            "ingredients": [
                "2 tomatoes (crushed)",
                "1/2 tsp tamarind paste",
                "1/2 tsp black pepper",
                "1/2 tsp cumin",
                "2 garlic cloves (crushed)",
                "Few curry leaves",
                "1/4 tsp turmeric",
                "Salt to taste",
                "1 tsp mustard seeds",
                "1 tsp oil",
                "Fresh coriander for garnish"
            ],
            "instructions": [
                "Boil tomatoes, tamarind, pepper, cumin, turmeric, and salt.",
                "Simmer for 5–7 minutes.",
                "Heat oil, temper mustard seeds, garlic, and curry leaves.",
                "Add to rasam and garnish with coriander.",
                "Serve hot with rice."
            ],
            "createdAt": "2025-06-20T13:19:59.218Z",
            "updatedAt": "2025-06-20T13:19:59.218Z",
            "__v": 0
        },
        {
            "_id": "685560135d4ee0bb5cd1406b",
            "recipeName": "Upma",
            "ingredients": [
                "1 cup rava (semolina)",
                "2 cups water",
                "1 onion (chopped)",
                "1 green chili (chopped)",
                "1/2 tsp mustard seeds",
                "1/2 tsp urad dal",
                "Few curry leaves",
                "Salt to taste",
                "2 tsp oil or ghee"
            ],
            "instructions": [
                "Roast rava and keep aside.",
                "Heat oil, temper mustard, urad dal, chili, and curry leaves.",
                "Add onions and sauté.",
                "Add water and salt. Bring to boil.",
                "Slowly add rava while stirring. Cook until fluffy.",
                "Serve hot with chutney or sugar."
            ],
            "createdAt": "2025-06-20T13:20:19.506Z",
            "updatedAt": "2025-06-20T13:20:19.506Z",
            "__v": 0
        },
        {
            "_id": "685560585d4ee0bb5cd1406f",
            "recipeName": "Coconut Chutney",
            "ingredients": [
                "1 cup grated coconut",
                "2 tbsp roasted chana dal",
                "1 green chili",
                "1/2 inch ginger",
                "Salt to taste",
                "Water as needed",
                "1 tsp mustard seeds",
                "Few curry leaves",
                "1 dried red chili",
                "1 tsp oil"
            ],
            "instructions": [
                "Grind coconut, chana dal, chili, ginger, salt with water.",
                "Transfer to bowl.",
                "Heat oil, temper mustard, red chili, and curry leaves.",
                "Pour over chutney and serve."
            ],
            "createdAt": "2025-06-20T13:21:28.190Z",
            "updatedAt": "2025-06-20T13:21:28.190Z",
            "__v": 0
        },
        {
            "_id": "6855637612f07690a4a73c5c",
            "recipeName": "Tamarind Rice (Puliyodarai)",
            "ingredients": [
                "1 cup cooked rice",
                "1 tbsp tamarind paste",
                "1 tsp mustard seeds",
                "1 tsp chana dal",
                "1/2 tsp urad dal",
                "1 dried red chili",
                "1/4 tsp turmeric",
                "Few curry leaves",
                "Salt to taste",
                "2 tsp sesame oil"
            ],
            "instructions": [
                "Heat oil, temper mustard, chana dal, urad dal, chili, curry leaves.",
                "Add turmeric and tamarind paste. Cook until thick.",
                "Add salt and mix with rice.",
                "Let it rest 15 mins before serving."
            ],
            "createdAt": "2025-06-20T13:34:46.727Z",
            "updatedAt": "2025-06-20T13:34:46.727Z",
            "__v": 0
        }
    ]
}



