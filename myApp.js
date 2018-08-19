var express = require('express');
var app = express();

app.get('/api/timestamp/:date_string?', 
        (req,res)=> {
                      if (req.params.date_string.length===10){
                        res.json({
                          "unix": req.params.date_string.getTime(),
                          "utc" : req.params.date_string.toUTCString() 
                        })
                      } else if (req.params.date_string===undefined){
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