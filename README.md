# Myntra Clone

A Myntra-inspired shopping application built using React.js and Vite. It includes product listings, shopping bag management, and automatic price calculation using Redux Toolkit.

## Features

- Displays products fetched from a backend API
- Shows product details, prices, ratings, and discounts
- Add products to the shopping bag
- Remove products from the shopping bag
- Displays the total number of bag items
- Calculates total MRP, discount, convenience fee, and final payment
- Displays a loading spinner while fetching products
- Navigation between Home and Bag pages
- Responsive user interface

## Technologies

- React.js
- Vite
- Redux Toolkit
- React Redux
- React Router
- Bootstrap
- React Icons
- Node.js
- Express.js

## Installation

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone <repository-url>
```

### 2. Set Up the Frontend

Navigate to the React project directory:

```bash
cd react-myntra-clone
```

Install the dependencies:

```bash
npm install
```

### 3. Set Up the Backend

Open a new terminal and navigate to the backend directory:

```bash
cd "myntra backend"
```

Install the backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
node app.js
```

**Note:** Replace `app.js` with your actual backend entry filename if it is different.

The backend server runs at:

`http://localhost:8080`

### 4. Start the Frontend

In the frontend terminal, run:

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

**Important:** Keep both the frontend and backend servers running simultaneously for the application to work correctly.

## Backend API Endpoints

The application uses a Node.js and Express.js backend to provide product data.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/items` | Fetches all products |
| GET | `/items/:id` | Fetches a product by ID |
| POST | `/items` | Adds a new product |

To verify that the backend is running, open the following endpoint in your browser:

`http://localhost:8080/items`

It should return the product data in JSON format.

## State Management

Redux Toolkit manages the application's global state.

- **Items Slice:** Stores the fetched product data.
- **Bag Slice:** Manages adding and removing products from the shopping bag.
- **Fetch Status Slice:** Tracks the fetching status and loading state.

## Shopping Bag

The shopping bag allows users to add and remove products and view their price details.

It includes:

- Total number of items
- Total MRP
- Discount on MRP
- Convenience fee
- Final payment amount

### Price Calculation

The final payment amount is calculated using the following formula:

`Final Payment = Total MRP - Total Discount + Convenience Fee`

The convenience fee is ₹99.

## Author

Om Sonawane