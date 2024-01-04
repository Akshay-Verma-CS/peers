# Stamp Duty Information App

This web application provides information about stamp duty rates and regulations in different states. Users can search for stamp duty details by selecting a state and type of duty.

## API Endpoints

1. **Get Stamp Duty Details by State and Type**
   - URL: `/api/stamp-duty`

2. **User Registration**
   - URL: `/api/users/register`

3. **User Login**
   - URL: `/api/users/login`

4. **Add Comment**
   - URL: `/api/comments`

5. **Upvote Comment**
   - URL: `/api/comments/upvote/:commentId`

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Next.js (for the frontend)
- JWT for authentication

## Setup

1. Install MongoDB and Node.js on your system.
2. Clone this repository.
3. Create a `.env` file with the following variables:
MONGO_URI=mongodb://localhost:27017/peers
JWTPRIVATEKEY=your-secret-key
SALT=10

markdown
Copy code
4. Install dependencies with `npm install`.
5. Start the server with `npm run dev`.
6. Access the web app at `http://localhost:3000`.

## Features

- Get stamp duty details by state and type.
- User registration and authentication.
- Comment system for requesting updates to stamp duty information.
- Upvoting and downvoting comments for data verification.

## Usage

- Register an account to access all features.
- Search for stamp duty details by selecting a state and duty type.
- Leave comments and request updates on stamp duty information.
- Upvote and downvote comments to verify data accuracy.

## Contributing

Feel free to contribute to this project by submitting pull requests.

## License

This project is licensed under the MIT License.