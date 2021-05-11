///////////////////////////////////////////////////////////
///                                                     ///
///                  𝙉𝙊𝘿𝙀𝙑𝙀𝙍𝙎𝙀                        ///
///    THIS PROJECT IS UNDER APACHE-2.0 LICENSE.        /// 
///       MADE BY DAKUX, RIX56 AND MURILO.              ///
///                                                     ///
///////////////////////////////////////////////////////////


const { Console } = require("console");

console.log('Nodeverse Alpha')

const express = require("express");

const app = express();

const routes = require('./routes');

app.set('view engine', 'ejs')

app.use(express.static('assets'))

app.use('/', routes);

app.listen( 8080 || process.ENV.PORT, function(){console.log("Server start on port 8080 !")});
