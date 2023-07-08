# Spindle-Backend README

# TODO

- Need to add JWT auth
- Need to make middleware function to check for JWT token/decode token

# Setup
Install node_modules
> npm install

Create .env file. Run in root directory
> cp .env.skeleton .env

Run server
> node server.js

# Testing
Using jest for testing. Jest will automatically search for tests in the ./tests folder
> npm run test
