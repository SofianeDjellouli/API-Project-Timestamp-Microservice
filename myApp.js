var express = require('express');
var app = express();

app.get('/:word/echo', (req,res)=> res.json({echo:req.params.word})
)