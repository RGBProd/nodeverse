console.log('Nodeverse Alpha')

// dependencies

const express = require("express");

const app = express();

const routes = require('./routes');

const db = require("./database")

const auth = require('./funcs/user_auth')

const cookiesession = require("cookie-session")

const cookieparser = require("cookie-parser")

const settings = require("../settings.json")

// initialise auth

auth.initialiseAuth()


// export functions and settings to ejs files

app.locals.nodeverse_settings = settings

app.locals.database = db

app.locals.userauth = auth

// set view engine, view folder, assets folder, and routes, and cookies, and other things

app.set('view engine', 'ejs')

app.set('views', 'frontend')

app.use(express.static('assets'))

app.use('/', routes);

app.use(cookiesession({
    name: "ndvrs-cookies",
    secret: settings.Security.cookie_secret
}))

app.use(cookieparser());

//server start

app.listen( 8080 || process.ENV.PORT, function(){console.log("Server start on port 8080 !")});

module.exports = app