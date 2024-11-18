#!/bin/bash

# Navigate to the app directory
cd "$(dirname "$0")"

# Check if node_modules exists, if not run npm install
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the React application
echo "Starting the React application..."
npm start
