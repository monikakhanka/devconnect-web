# DevConnect frontend

## Vite project and tilwind configure

- created a Vite + React application
- npm install and git initialise
- remove unnecessary code and files
- configure tailwindcss for vite
- npm run dev

## Install daisyui component plugin

- install daisyui
- add Navbar component to app.js
- separate NavBar.jsx for bavbar component

## Router installation and configure

- npm install react-router-dom
- create BrowserRouter, Routes, route, route children
- create routes and children routes
- Use <Outlet/> to render children route in body component. All the components will be rendered below NavBar and we will not have to write navbar on each page separately
- Likewise a footer component below the outlet will be rendered on each page
- create footer component

## login Page, CORS configure

- create login page
- install axios
- CORS - install cors in backend => add middleware with configurations: origin:"http://localhost:3000" and credentials: true
- while making api call from frontend using axios pass => {withCredentials: true} to get access to th e cookies

## Install redux

- install redux
  #npm install @reduxjs/toolkit
  #npm install react-redux
- create utils folder inside src and in it create {appStore.js} to configure redux store
- provide the store to the app by wrapping the App code inside <Provider store={appStore}>
- create slices in appStore - user
- add reducer to the store
- refactor the code by defining constants in a separate file
- create component folder for components and refactor the imports

## user unauthenticated 
- If user not given access to other routes without login
- If token not present, redirect the user to login page

## Logout