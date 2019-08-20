//Controllers

require("dotenv").config();
const path = require('path'); // Usually moved to the start of file
// const cloudinary = require('cloudinary')
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { register, login, userCheck, logout } = require("./auth/authController");
const {
  addPurchase,
  getData,
  deletePurchase,
  edit,
  getBudget
} = require("./expenseController/expenseController");
const { profileEdit, profile } = require("./profileCtrl");
//
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
//   upload_preset: process.env.UPLOAD_PRESET
// })
const app = express();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("DB Connected");
});

app.use(express.json());

//Auth
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/user", userCheck);
app.get("/auth/logout", logout);


app.use((req, res, next) => {
  if (req.session.user) return next();
  else res.sendStatus(401);
});

//Expenses
app.get("/api/expense", getData);
app.post("/api/expense/purchase", addPurchase);
app.delete("/api/expense/purchase/:id", deletePurchase);
app.get("/api/expense/budget", getBudget);
app.put("/api/expense/budget/:username", edit);

//Profile
app.get("/api/profile", profile);
app.put("/api/profile/:username", profileEdit);

// //image
// app.post('/image/upload', (req, res) => {

//   console.log(req.body)
//   const values = Object.values(req.body.form)
//   const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
//   Promise
//     .all(promises)
//     .then(results => res.json(results))
// })


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(5050, () => console.log("listening on  port 5050!"));
