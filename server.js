const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  rolling: true,
  secureProxy: true,
  cookie: {
    httpOnly: true,
    maxAge: 120000, //2 hours;
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`);
  });
});