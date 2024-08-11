# Inventory and Sales Management Backend System

## Overview

This project is a backend system designed to manage inventory and sales for a small shop. The system provides RESTful API endpoints that allow users to perform CRUD operations on inventory items and bills, automatically updating inventory quantities when sales transactions are recorded.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database used for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to interact with the database.
- **body-parser**: Middleware for parsing incoming request bodies in a middleware before your handlers, available under `req.body`.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.
  
## How to Set Up and Run the Application
### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB Atlas** account and cluster set up, or a locally running MongoDB instance.

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd shop-inventory-backend
   ```
2. **Install Dependencies**
```bash
npm install
```
3. **Run the Server**
```bash
npm start
```

## API Endpoints

### Inventory Endpoints

1. **Add a New Item to the Inventory**
   - **Endpoint**: `POST /inventory`
   - **Description**: Adds a new item to the inventory.
   - **Request Body** (JSON):
     ```json
     {
       "name": "Product Name",
       "description": "Product Description",
       "price": 25.00,
       "quantity": 100
     }
     ```
   - **Response**: JSON object of the newly created inventory item.

2. **Retrieve All Inventory Items**
   - **Endpoint**: `GET /inventory`
   - **Description**: Retrieves a list of all items in the inventory.
   - **Response**: JSON array of all inventory items.

3. **Retrieve a Specific Inventory Item**
   - **Endpoint**: `GET /inventory/:id`
   - **Description**: Retrieves details of a specific inventory item by its ID.
   - **Response**: JSON object of the specified inventory item.

4. **Update an Inventory Item**
   - **Endpoint**: `PUT /inventory/:id`
   - **Description**: Updates a specific inventory item by its ID.
   - **Request Body** (JSON):
     ```json
     {
       "name": "Updated Product Name",
       "description": "Updated Description",
       "price": 30.00,
       "quantity": 80
     }
     ```
   - **Response**: JSON object of the updated inventory item.

5. **Delete an Inventory Item**
   - **Endpoint**: `DELETE /inventory/:id`
   - **Description**: Deletes a specific inventory item by its ID.
   - **Response**: Success message confirming deletion.

### Bill Endpoints

1. **Create a Bill**
   - **Endpoint**: `POST /bills`
   - **Description**: Creates a bill for a sale transaction and automatically updates the inventory by subtracting the sold quantities.
   - **Request Body** (JSON):
     ```json
     {
       "items": [
         {
           "itemId": "item_id_from_inventory",
           "quantity": 2,
           "price": 25.00
         }
       ]
     }
     ```
   - **Response**: JSON object of the newly created bill, with the inventory quantities updated accordingly.

2. **Retrieve All Bills**
   - **Endpoint**: `GET /bills`
   - **Description**: Retrieves a list of all bills.
   - **Response**: JSON array of all bills.

3. **Retrieve a Specific Bill**
   - **Endpoint**: `GET /bills/:id`
   - **Description**: Retrieves details of a specific bill by its ID.
   - **Response**: JSON object of the specified bill.



