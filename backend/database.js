//dependencies

const mysql = require("mysql2");
const settings = require("../settings.json")

// create a database connection

const Database = mysql.createConnection({
    host: settings.DB.host,

    user: settings.DB.user,

    password: settings.DB.password,

    database: settings.DB.database
})

Database.connect(function (err){
    if(err) throw err;
    console.log("Connected to the database !")
})

//export database

module.exports = Database