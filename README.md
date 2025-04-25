### Node.js API + MongoDB - User Lookup

This simple Express API connects to a MongoDB database and retrieves user data by ID via a GET endpoint at `/users/:id`. It returns the user's details only if they are over 21 and gracefully handles invalid IDs and not-found errors.
