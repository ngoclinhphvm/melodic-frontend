# Melodic - Music Streaming Website

This is the backend for **Melodic**, a music streaming web application.

## Features

- User authentication and management
- Music upload and streaming
- Playlist creation and management
- RESTful API endpoints
- File uploads stored in `/uploads`

## Project Structure

```
backend/
  ├── src/
  │   ├── config/        # Configuration files
  │   ├── controller/    # Route controllers
  │   ├── cron/          # Scheduled jobs
  │   ├── hooks/         # Custom hooks
  │   ├── middlewares/   # Express middlewares
  │   ├── model/         # Database models
  │   ├── routes/        # API routes
  │   ├── templates/     # Email/templates
  ├── uploads/           # Uploaded files
  ├── test/              # Tests 
  ├── index.js           # Entry point
  ├── package.json
  └── .env.sample        # Environment variable sample
```

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.sample` to `.env` and fill in the required values.

3. **Run the server:**
   ```sh
   npm start
   ```

4. **Run tests:**
   ```sh
   npm test
   ```