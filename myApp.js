var express = require('express');
var app = express();

app.get('/api/timestamp/:date_string?', 
        (req,res)=> {
//                       checks if date_string is valid
                      if (new Date(req.params.date_string) instanceof Date && 
                          !isNaN(new Date(req.params.date_string).valueOf())){
                        res.json({
                          "unix": req.params.date_string.getTime(),
                          "utc" : req.params.date_string.toUTCString() 
                        })
                      } 
//                       checks if nothing is passed
  else if (req.params.date_string===undefined &&
                                req.params.date_string===null){
                        res.json({
                          "unix": new Date().getTime(),
                          "utc" : new Date().toUTCString() 
                        })
                      } else {
                        res.json({
                          "unix": null,
                          "utc" : "Invalid Date"
                        })
                      }
                    })

module.exports = app;