const express = require('express');
const path = require('path');

const PORT = 3001;
const app = express();

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is a single-page application, so this is the only route we need
// (That is, unless I ever decide to implement a database and an API)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
