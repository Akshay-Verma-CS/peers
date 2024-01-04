# Stamp Duty Information App

## Introduction
This app provides information on stamp duty rates across various states in India.

## Prerequisites
- Node.js
- MongoDB
- npm or yarn

## Setup
1. Clone the repository.
2. Navigate to the project directory and run `npm install`.
3. Set up your `.env` file with `MONGO_URI`.
4. Start MongoDB service: `sudo systemctl start mongod`.
5. Run the server: `npm run dev`.

## Usage
Access the API at `http://localhost:5000/api/stamp-duty/{state}/{dutyType}`. Use tools like Postman or cURL to make requests.

## Example Request
    curl http://localhost:5000/api/stamp-duty/Maharashtra/Property
