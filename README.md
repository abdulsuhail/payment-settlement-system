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
5. Click on the Run button, which can typically be found in the top right corner when the collection is selected. This will open the Collection Runner window.