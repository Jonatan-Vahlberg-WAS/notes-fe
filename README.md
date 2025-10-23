# Joogle - Keep

## Description

Joogle - Keep is a note-taking app built with React, Tailwind CSS, and TypeScript.

## Features

- Add a note
- Edit a note
- Delete a note
- Pin a note trough update or action
- Unpin a note trough update or action

## API
## Enviroment variables
````
VITE_API_URL=http://localhost:8000
```
### Auth
````
POST /auth/signup
POST /auth/signin
POST /auth/signout
GET /auth/me
```
### Notes
```
GET /notes
POST /notes
PUT /notes/:id
DELETE /notes/:id
```

# Authentication
Authentication is done through cookies. The cookie is handled from supabase.

# TODOS
- [ ] Implement enviroment variables for the api url
- [ ] Implement authentication through cookies
- [ ] Fetch notes from the API
- [ ] Create a notes context handling the notes state and actions: 
- [ ] Create a auth context handling fetching the user-profile and exporting it so rest of the app has access to it.
