const path = require('path');
const express = require('express');
const session = require('express-session'); 
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sesh = {
    secret: 'Super secret secret',
    cookie: {expires: 10 * 60 * 1000}, //10 minutes
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sesh));
// if there is inactivity for 10 minutes, the session expires
app.get('/session', function(req, res, next) {
  if(req.session.views){
    req.session.views++
    res.end();
  }
  else{
    req.session.views = 1
    res.end();
  }
});

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
