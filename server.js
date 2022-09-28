const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const url = require(`${__dirname}/database.js`)
const getUrlTitle = require('get-url-title');
const PORT = process.env.PORT || 2001


// router for the site

app.get('/index.css', (req, res) => {
  res.sendFile(`${__dirname}/index.css`)
});
app.get('/index.js', (req, res) => {
  res.sendFile(`${__dirname}/index.js`)
});


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

// socket.io code start from here


io.on('connection', (socket) => {

  socket.on("userinputlink", (userlink) => {


    new url({ orginalurl: userlink, shorturl: Math.random().toString(36).substring(2, 10), datecreated: new Date().getTime(), lastuseddate: new Date().getTime() }).save().then((data) => {

      socket.emit("shorturlgenerated", data.shorturl)

      var urltitle = ""

      getUrlTitle(userlink).then((titleofthepage) => {

        socket.emit("titleoftheurl", titleofthepage)

      }).catch((err) => {})


    }).catch((err) => { })

  })


})

// code to get the short link and then redirect to the orginal url


app.get("/:shorturl", (req, res) => {
  url.find({}).then((data)=>{console.log(`Total URL in the database ${data.length}`);})

  url.findOne({ shorturl: req.params.shorturl }).then((data) => {
    res.redirect(data.orginalurl)

    url.updateOne({ shorturl: req.params.shorturl }, { lastuseddate: new Date().getTime() }).then((data) => { })

  }).catch((err) => { res.redirect("/")})

})


server.listen(PORT, () => { console.log('listening on ' + PORT); });