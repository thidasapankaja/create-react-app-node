const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/api/reply', (req, res) =>{
    res.send({ reply : 'This message is from Server !'});
});

app.listen(port);