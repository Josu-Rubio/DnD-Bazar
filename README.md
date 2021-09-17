# D&D Bazar

## _MERN App Store about a simulated D&D Bazar_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://dnd-bazar.herokuapp.com/)

### The app consist on:

- Backend made with NodeJs
- API build on ExpressJs
- Database on MongoDb Atlas
- JWT authentication
- Frontend made with React
- Hooks running on Redux
- Styles provided by reactstrap
- Payments through Stripe

## INSTALATION

### Download

To download this repository:

```
git clone https://github.com/Josu-Rubio/DnD-Bazar.git
```

### NPM i (Module installation)

On the main folder:

```
npm install
```

On the client folder:

```
npm install
```

### Config

Before starting the App, theres a "Config" folder with a `default.json.example` file on the server folder. Change the name to `.default.json` and follow the instructions inside. This way you will set your App ready to start.

### Starting de App

Once generated the default.json file, start the app:

```
npm run dev
```

It runs "concurrently" both server and client.

The store should run on "localhost:3000" alowing the user developer to add users in the database just registering them.
Once registered, it will allow the user to see the different pages created.

### Add Item

This page is not on the main view (it's allso only accesible being loged) and you can access it adding to the URL "/addItem".

It redirect to a page where you can add different products on your store.
This feature will be changed on a future so it only allow "admins" to add, upload and delete products.

## Work in progress

- Filter (Category, Price, Name...)
- Add images through Multer
- Create permission on User (Admin, Buyer)
- Add Multi languages through i18n
- Add Nodemailer + SendGrid for email confirmation
- Change Home as "blog" and create a "Shop" page

---

Any bug that could be found on the APP, please do not hesitate to comunicate it through GitHub.
Thanks for showing interest on this API.

Regards
