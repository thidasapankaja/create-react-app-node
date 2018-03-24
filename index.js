const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

//Serve static files
app.use(express.static(path.resolve(__dirname, "./client/build")));

//Serve API request from client
app.get("/api/reply", (req, res) => {
    console.log('Requested from Client');
  res.send({ reply: "This message is from Server !" });
});

//Serve other requests from react app
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port);
