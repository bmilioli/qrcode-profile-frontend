# QRCODE profile generator - FRONTEND

For the frotend git repository go to: https://github.com/bmilioli/qrcode-profile-backend

This is the API Rest for generate QRCode profiles
This applications was made by Bruno Milioli for an aplicattion to a job interview in buzzvel

## Deploys

This application is deployed in heroku and can be accesse the backend in: https://qrcode-profile-backend.herokuapp.com/
and the frontend in: https://qrcode-profile-frontend.herokuapp.com/. Bouth was deployed using docker.

All the data is stored in a mongoDB database in mlab

If you want to see all the entries in the database you can go to: https://qrcode-profile-backend.herokuapp.com/api/users/all

## Technologies

I used the following technologies to build this application:
Frontend: React.js
Backend: Node.js
Database: MongoDB

## How to use

To use this application you need to have installed in your machine:
Node.js
MongoDB

You need to create a .env file in the root of the project like the .env.example file and put the backend url in the REACT_APP_API_URL variable.

After that you need to clone this repository and install the dependencies with the following command:

### `npm install`

### `npm start`



## Docker 

You can start the app using docker. 
for this run the command:

### `docker build -t qrcode-profile-backend`