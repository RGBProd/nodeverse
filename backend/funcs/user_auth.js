//dependencies 
const db = require("../database")
const bcrypt = require('bcrypt');

//class

class Auth{
    //initialise auth !
    initialiseAuth(){
        bcrypt.genSalt(10, function(err, salt) {
            global.registersalt = salt
        })
    }
    //function create user
    createUser(username,password,nickname){
        var isSuccess
        bcrypt.hash(password, registersalt, function(err, hash) {
            // ok so the query is kinda bad but i can't do better so yeah f*ck js
            var query = "INSERT INTO `users`(`username`, `userpass`, `nickname`) VALUES('"+ username + "', '"+ hash + "', '"+ nickname + "')"
            db.query(query, function(err){
                if (err){
                    global.isSuccess = false
                    throw err
                }else{
                    global.isSuccess = true
                }
            })
        });
        return isSuccess
    }
}

//export class

module.exports = new Auth()