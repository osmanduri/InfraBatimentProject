const mongoose = require('mongoose');
require('dotenv').config({ path: './Config/.env' });

// Check if DB_CONNECTION is defined
if (!process.env.DB_CONNECTION) {
    console.error('Error: DB_CONNECTION is not defined in the .env file.');
    process.exit(1); // Exit the process with an error code
}

// Set Mongoose options to handle index deprecation
mongoose.set('useCreateIndex', true);

// Connect using the updated connection string format
mongoose.connect(
    process.env.DB_CONNECTION, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Mongodb connected");
}).catch((err) => {
    console.error("Connection error: " + err);
});
