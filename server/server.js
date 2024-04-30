import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userouter from './routes/user.route.js';
import authrouter from './routes/auth.route.js'

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("connect database");
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log('server running');
    }
);

app.use('/api/user', userouter);
app.use('/api/auth', authrouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});