const express = require("express");
const PORT = 3000;
const app = express();
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const nocache = require("nocache");
const loginRoute = require("./routes/loginRoute");

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "Key",
    reSave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000000 },
  })
);
app.use(flash());
app.use(nocache());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", loginRoute);

app.listen(PORT, () => {
  console.log(`Server started running`);
  console.log(`User Side : http://localhost:${PORT}`);
});
