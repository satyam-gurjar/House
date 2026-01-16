🏠 Airbnb Backend Clone

A personal portfolio project built with Node.js, Express.js, EJS, and Tailwind CSS, inspired by Airbnb.
This project demonstrates MVC architecture, file-based data handling, clean routing, and a modern UI using Tailwind CSS.

🔗 GitHub Repository:
https://github.com/satyam-gurjar/airbnb_backend

📌 Project Overview

This Airbnb backend clone allows users to:

View available homes

See detailed home information

Add and manage homes as a host

Book homes

Add/remove homes from favourites

Manage bookings

The project focuses on backend fundamentals, server-side rendering with EJS, and clean code practices, making it ideal for placements and portfolio showcase.

🚀 Features
🏡 User Features

View all listed homes

Home detail page with price, rating, and location

Add homes to favourites

Remove homes from favourites

Book homes

View bookings list

🧑‍💼 Host Features

Add new homes

Edit existing homes

Remove homes from listings

⚙️ Technical Features

MVC architecture

File-based data storage (JSON)

Server-side rendering with EJS

Reusable partials (navbar, head, footer)

Tailwind CSS for modern UI

Error handling & 404 page

Clean routing structure

🛠️ Tech Stack

Backend: Node.js, Express.js

Frontend (SSR): EJS

Styling: Tailwind CSS

Database: File-based storage (JSON)

Architecture: MVC (Model–View–Controller)

Dev Tools: Nodemon

📁 Project Structure
AIRBNB/
│
├── controller/
│   ├── hostController.js
│   ├── storeController.js
│   └── errors.js
│
├── Data/
│   ├── homes.json
│   └── favourite.json
│
├── models/
│   ├── homes.js
│   └── favourite.js
│
├── routes/
│   ├── hostRouter.js
│   └── storeRouter.js
│
├── views/
│   ├── host/
│   ├── store/
│   ├── partials/
│   └── 404.ejs
│
├── public/
├── utils/
├── app.js
├── package.json
└── nodemon.json

▶️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/satyam-gurjar/airbnb_backend.git
cd airbnb_backend

2️⃣ Install Dependencies
npm install

3️⃣ Run the Project (Development Mode)
npm run dev

4️⃣ Open in Browser
http://localhost:3000

🧪 Data Storage

Homes data is stored in:
Data/homes.json

Favourite homes are stored in:
Data/favourite.json

This approach is used to demonstrate backend logic without a database.

🔮 Future Improvements

MongoDB integration

User authentication (Login/Signup)

Role-based access (User / Host)

Payment gateway integration

REST API version

Deployment (Render / Railway / AWS)

👨‍💻 Author

Satyam Gurjar

GitHub: @satyam-gurjar

Role: Software Engineer (Backend / Full-Stack)

📄 License

License not specified yet.
(Recommended: MIT License for open-source portfolio projects)

⭐ If You Like This Project

Give it a ⭐ on GitHub

Fork it

Use it as a learning reference