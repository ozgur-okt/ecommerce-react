# Ecommerce App

[screen-capture.webm](https://github.com/ozgur-okt/ete-task/assets/73358116/346fd652-a0b4-49b1-af5b-0e9954500bf6)




This is a React project with a Node.js Express backend that offers a shopping experience. This is a full-stack web application designed for online shopping. It consists of two main folders:

```frontend```: The React-based frontend that users interact with.

```backend```: The Node.js Express backend that handles data processing and server-side operations.

## Features 

App boasts a variety of features to enhance your shopping experience:

### Product Catalog:

* View a list of products in the "Products" section.
* Access detailed information about each product by clicking on its name.
* Navigate to the "Payment" page to complete your purchase.

### Filtering and Sorting:

* Filter products by their models or brands to quickly find what you're looking for.
* Sort products by creation date or price in ascending or descending order.

### Search Functionality:

* Utilize the search bar at the top of the page to search for products by name.

### Shopping Cart:

* Easily manage your shopping cart, located on the right-hand side of the screen.
* Add products to your cart, and see them listed with quantities and prices.
* Remove products from your cart as needed.
* View the total price of items in your cart.

### State Management:

The application uses Redux 8.1.2 to efficiently manage and synchronize states between components.

## Getting Started

To get started with this project, follow these steps:

### Clone the project

Clone the repository to your local machine:

```
git clone https://github.com/ozgur-okt/ecommerce-task.git
```

### Install the necessary dependencies for both the frontend and backend:

```
# Navigate to the frontend folder
cd frontend
npm install

# Navigate to the backend folder
cd backend
npm install
```

### Start the frontend development server:

```
npm start
```

### Start the backend server:

```
node index
```

Now, you should have the frontend and backend servers up and running.

## Usage
Once you've started the servers, open your web browser and navigate to the provided URL (http://localhost:3000) to start using the application. Explore the product catalog, use the filtering and sorting options, and add products to your cart. You can also access the payment page to complete your demo purchase.

## Testing
We have thoroughly tested this application using Cypress. To execute the test files, follow these steps:

Make sure your development servers (frontend and backend) are running.

Open a new terminal window and navigate to the project's root directory.

Run Cypress using the following command:

```
npx cypress open
```

This will open the Cypress Test Runner, allowing you to run and view the tests interactively.

## License
This project is licensed under the MIT License.
