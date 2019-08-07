//Controllers

require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { register, login, userCheck, logout } = require("./auth/authController");
const { addPurchase, getData } = require("./expenseController/expenseController");

//

const app = express();

app.use(express.json());

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

//Auth
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/user", userCheck);
app.get("/auth/logout", logout);

app.use((req, res, next) => {
    if (req.session.user) return next();
    else res.sendStatus(401);
})

//Expenses
app.get("/api/expense", getData)
app.post("/api/expense/purchase", addPurchase);
app.delete("/api/expense/purchase:id");

app.listen(5050, () => console.log("listening on  port 5050!"));
