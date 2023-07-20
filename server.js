const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/user", (req, res) => {
  res.json(req.body);
});

app.post("/api/user/login", (req, res) => {
  const { email, password } = req.body;


  const loginDetails = {
    email,
    password,
    token: email + password,
  };


  res.json(loginDetails);
});

app.listen(4000, () => console.log("listening"));
