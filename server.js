const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Use api routes. This must go after middleware
app.use('/api', apiRoutes); 


//default response for any other request (not found)
//a cathcall so put last otherwise will override other routes
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
});

