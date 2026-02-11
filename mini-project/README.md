# Mini Project

## Description
This is a Node.js-based mini-project that shows the implementation of a RESTful API for managing products, carts, and orders. 
It uses Express.js for routing, MongoDB for data storage, and Mongoose for object modeling.

## Features
- **Products**: Create, read, update, and delete products.
- **Carts**: Manage user carts, including adding, updating, and removing items.
- **Orders**: Create and retrieve orders.
- **Error Handling**: Centralized error handling middleware.

## Project Structure
```
mini-project/
├── app.js                # Main application entry point
├── config/
│   └── dbConfig.js       # Database connection configuration
├── controllers/
│   ├── cartController.js # Cart-related logic
│   ├── orderController.js # Order-related logic
│   └── productController.js # Product-related logic
├── middleware/
│   └── errorHandler.js   # Centralized error handling middleware
├── models/
│   ├── cartModel.js      # Mongoose schema for carts
│   ├── orderModel.js     # Mongoose schema for orders
│   └── productModel.js   # Mongoose schema for products
├── routers/
│   ├── cartRouter.js     # Routes for cart operations
│   ├── orderRouter.js    # Routes for order operations
│   └── productRouter.js  # Routes for product operations
└── utils/
    └── validationSchema.js # Validation logic
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd mini-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   mongoDB_url=<your-mongodb-connection-string>
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Access the API at `http://localhost:3000`.

## Endpoints
### Products
- `GET /products`: Retrieve all products.
- `GET /products/:id`: Retrieve a product by ID.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update a product by ID.
- `DELETE /products/:id`: Delete a product by ID.

### Carts
- `GET /cart`: Retrieve the user's cart.
- `POST /cart`: Add an item to the cart.
- `PUT /cart`: Update items in the cart.
- `DELETE /cart/:productId`: Remove an item from the cart.

### Orders
- `GET /orders`: Retrieve all orders.
- `GET /orders/:id`: Retrieve an order by ID.
- `POST /orders`: Create a new order.

## License
This project is licensed under the MIT License.
Just kiding.