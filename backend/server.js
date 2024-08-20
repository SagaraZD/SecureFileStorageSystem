const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
const crypto = require('crypto');
const fs = require('fs');

app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/file_storage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB...', err));

// Placeholder route
app.get('/', (req, res) => {
    res.send('Secure File Storage System API');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
