const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/User');
const postRoutes = require('./routes/posts');
const locationRoutes = require('./routes/Location');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Server Connected!!', process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Error in connecting to MongoDB Server', err);
    });

app.use(cors());
app.use(morgan(':date :method :url :status :res[content-length] -(Response: :response-time)'));

// MiddleWare to use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/v1/location', locationRoutes);
// Index Route
app.get('/', (req, res) => {
    res.send({
        msg: 'Welcome to Geo Attend Server. If you are seeing this. You are at right track.',
        route: ['/api/user/register', '/api/v1/location']
    });
});
