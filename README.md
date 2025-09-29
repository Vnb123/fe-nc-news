# 📰 NC News Frontend

A responsive frontend for the [NC News API](https://github.com/Vnb123/be-nc-news), built with **React** and **Vite**.  
Users can browse articles, view details, vote, and add/delete comments.  
Originally developed as part of a Northcoders bootcamp project.

---

## 🌐 Live Demo

Check out the live app: [https://ncnewsvb.netlify.app](https://ncnewsvb.netlify.app/)

---

## ✨ Features

- Browse all articles (sorted by date)
- View individual article pages with full content
- Vote on articles and comments
- Add comments (logged-in demo user: `grumpy19`)
- Delete comments (only your own)
- Responsive design for desktop and mobile

---

## 📦 Installation & Setup

1. Clone the repo:

   git clone https://github.com/Vnb123/fe-nc-news.git
   cd fe-nc-news

2. Install dependencies:

   npm install

3. Run the development server:

   npm run dev

The app will be available at: http://localhost:5173

---

## 🔗 Backend API

This frontend consumes the [NC News backend API](https://github.com/Vnb123/be-nc-news).

- Hosted Render URL: https://be-nc-news.onrender.com/api
- Local URL (if running backend locally): http://localhost:9090/api
- **Note:** The Render service must be deployed and running to access the hosted API.

---

## ⚙️ Project Structure

- `src/components/` → reusable React components
- `src/pages/` → page-level components
- `src/utils/` → helper functions and API calls
- `src/App.jsx` → main app router
- `src/main.jsx` → app entry point

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
