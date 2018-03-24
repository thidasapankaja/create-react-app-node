const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/api/reply", (req, res) => {
  res.send({ reply: "This message is from Server !" });
});

app.listen(port);
