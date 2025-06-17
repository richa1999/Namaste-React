# QuickBite 🍔  
A Swiggy-like Food Delivery Web App

QuickBite is a frontend clone of Swiggy that allows users to browse restaurants, view menus, and simulate ordering food — all styled with a modern UI and powered by third-party Swiggy APIs. Built for learning and experimentation.

---

## 🚀 Features

- 🍽️ Browse restaurants by location
- 🔍 Real-time restaurant search
- 🧾 View menu and item details
- 🛒 Add to cart & simulate checkout
- ⚡ Fast and responsive UI
- 🌐 CORS handled via Vercel proxy route

---

## 🛠 Tech Stack

- **Frontend:** React / Next.js  
- **Hosting:** Vercel  
- **API:** Swiggy (unofficial/third-party endpoint)  
- **Styling:** Tailwind CSS  
- **State Management:** React Context / Redux (if used)

---

## 🌐 Live Demo

https://quickbite-flax.vercel.app/
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/quickbite.git
cd quickbite

2. Install Dependencies

npm install
# or
yarn install

3. Add Environment Variables (if needed)

Create a .env.local file (only if your proxy/API requires keys):

# Example
API_BASE_URL=https://www.swiggy.com/dapi

4. Start Development Server

npm run dev

Visit http://localhost:3000 in your browser.
🧩 Project Structure

/pages
  /api         # Vercel serverless functions (proxy for CORS)
  /index.js    # Main landing page
/components    # UI components (Navbar, RestaurantCard, etc.)
/utils         # Helper functions for API fetch
/styles        # Global and modular CSS

🛡️ CORS Handling

Since Swiggy APIs block CORS, QuickBite uses Vercel API routes as a proxy layer.
Example proxy: /api/swiggy-restaurants forwards requests to the Swiggy API server-side, avoiding browser CORS restrictions.
🧪 Known Limitations

    No real payment or order placement

    Uses unofficial Swiggy endpoints (may break if they change)

    Cart and auth are client-side only (no backend storage)

💡 Future Improvements

    Firebase/Auth0 login system

    Persistent cart and order history

    PWA support for installable app experience

    Location-based suggestions with maps
