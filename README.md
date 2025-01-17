# Payment and Settlement System

This project is a simple payment and settlement system with a React TypeScript frontend and a Node.js TypeScript backend.


## Table of Contents
- [Payment and Settlement System](#payment-and-settlement-system)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
  - [Testing](#testing)
  - [Database choice](#database-choice)
  - [Backend Deployment](#backend-deployment)
  - [Frontend Deployment](#frontend-deployment)
---

## Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm version 6.14+ or Yarn 1.22+)
- [Docker](https://www.docker.com/) (optional, for containerized development)

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
    ```

2. Install the dependencies:

    ```bash
   npm install 
    ```

    


3. Start the development server

    ```bash
        npm run dev 
    ```

## Frontend Setup

1. Navigate to the backend directory:
   ```bash
   cd frontend
    ```

2. Install the dependencies:

    ```bash
   npm install 
    ```

    


3. Start the development server

    ```bash
        npm start
    ```




The frontend application should now be running on `http://localhost:3000`.

## Running the Application

1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000`.
3. You should see the Payment and Settlement System interface.

## API Endpoints

- `POST /transactions`: Create a new transaction
- `GET /transactions`: Retrieve all transactions (with optional filters)
- `POST /transactions/settle`: Settle all pending transactions
- `POST /transactions/callback`: Simulate a transaction status update


## Testing

1. Open Postman: Launch the Postman application on your computer.
2. Go to Collections: In the left sidebar, click on the Collections tab to view your existing collections.
3. Import Collection:
    * Click on the Import button, usually located in the top left corner of the Postman window.
    * In the import dialog, either drag and drop your postman_collection.json file into the designated area or click on Choose Files to browse for the file on your computer.
    * After selecting the file, click on the Import button to load the collection into Postman.
4. After importing, find your newly added collection in the Collections tab and click on it to expand.
   * Run the callback API defined to simulate the callback functionality
5. Click on the Run button, which can typically be found in the top right corner when the collection is selected. This will open the Collection Runner window.

## Database choice
Below are some of the reasons to choose SQL based database
1. ACID Compliance
2. Data Integrity
3. Concurrency Control
    * SQL databases typically have built-in mechanisms for managing concurrent transactions, such as locking and isolation levels. This ensures that multiple users can access and modify data simultaneously without compromising integrity.
4. Complex Transactions
Transaction services often involve complex business logic and multiple interrelated operations. SQL databases can handle these complexities efficiently through transactions that span multiple tables and relationships.


***Currently, the deployment process is triggered based on which folder contains the code changes. For example, if there are updates in the frontend folder, only the frontend application will be deployed, and similarly, any changes made to the backend folder will trigger a deployment of the backend application. The following steps outline the process for initiating manual deployment triggers.***
## Backend Deployment 
1. Go to the Actions tab of your GitHub repository.
2. Select the workflow named "Deploy Backend to Heroku."
3. Click the Run workflow button.
4. Optionally, you can select a branch if prompted, then click Run workflow to start the deployment process manually.
**Hosted at https://payment-settlement-backend-98fb16555fe0.herokuapp.com**

## Frontend Deployment 
1. Go to the Actions tab of your GitHub repository.
2. Select the workflow named "Deploy Frontend to Netlify."
3. Click the Run workflow button.
4. Optionally, you can select a branch if prompted, then click Run workflow to start the deployment process manually.
**Hosted at https://66f761f8ba237130552652fc--fastidious-kulfi-a4b0ff.netlify.app/**

