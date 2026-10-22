# Myntra Clone

A Myntra-inspired shopping application built using React.js and Vite. The application fetches product data from a backend API and provides shopping bag management with dynamic price calculations using Redux Toolkit.

## Features

* Fetches product data from a backend API
* Displays product images, company names, prices, ratings, and discounts
* Add products to the shopping bag
* Remove products from the shopping bag
* Displays the total number of bag items
* Calculates total MRP, discount, convenience fee, and final payment
* Displays a loading spinner while fetching products
* Navigation between Home and Bag pages
* Responsive design for desktop, laptop, tablet, and mobile devices
* Environment variable support for backend API configuration

## Technologies Used

* React.js
* Vite
* JavaScript
* Redux Toolkit
* React Redux
* React Router
* Bootstrap
* React Icons
* Node.js
* Express.js

## Project Structure

```text
myntra-clone/
├── react-myntra-clone/    # Frontend application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── index.html
│
└── myntra backend/        # Backend application
    ├── data/
    ├── app.js
    └── package.json
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project directory.

### 2. Set Up the Frontend

```bash
cd react-myntra-clone
npm install
```

Create a `.env` file in the frontend root directory and configure the backend API URL:

```env
VITE_API_URL=http://localhost:8080
```

Start the frontend development server:

```bash
npm run dev
```

### 3. Set Up the Backend

Open a separate terminal and navigate to the backend directory:

```bash
cd "myntra backend"
npm install
```

Start the backend server:

```bash
node app.js
```

Replace `app.js` with the actual backend entry filename if it is different.

The backend runs at:

```text
http://localhost:8080
```

**Important:** Keep both the frontend and backend servers running during local development.

## Deployment

The application uses separate deployments for the frontend and backend.

* **Frontend:** Deployed on Vercel
* **Backend:** Deployed on Render

The frontend communicates with the backend through its API endpoint.

Configure `VITE_API_URL` in the frontend deployment environment variables to point to the deployed backend URL.

For local development, use the localhost URL. For production, use the deployed backend URL.

After changing frontend environment variables, trigger a new frontend deployment for the changes to take effect.

## Backend API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/items`     | Fetches all products    |
| GET    | `/items/:id` | Fetches a product by ID |
| POST   | `/items`     | Adds a new product      |

To test the local backend, open:

```text
http://localhost:8080/items
```

The endpoint should return product data in JSON format.

## State Management

Redux Toolkit manages the application's global state.

* **Items Slice:** Stores product data fetched from the backend.
* **Bag Slice:** Manages adding and removing products from the shopping bag.
* **Fetch Status Slice:** Tracks the product-fetching status and loading state.

React Redux connects the Redux store to React components.

## Shopping Bag

The shopping bag provides an overview of selected products and their prices.

It includes:

* Total number of bag items
* Total MRP
* Discount on MRP
* Convenience fee
* Final payment amount

### Price Calculation

The final payment amount is calculated using the following formula:

```text
Final Payment = Total MRP - Total Discount + Convenience Fee
```

The convenience fee is ₹99.

## Responsive Design

The user interface adapts to different screen sizes, including:

* Large desktop screens
* Laptops
* Tablets
* Mobile phones

## Author

Om Sonawane
