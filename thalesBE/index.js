import express from 'express';
import mongoose from 'mongoose'
import compression from 'compression'
import http from 'http'
import helmet from 'helmet'
import cors from 'cors'
import departmentRoute from './modules/departments/router/departmentRoute.js'


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()) // enable the read of the body
app.use(compression()) //Compress all routes
app.use(helmet())
app.use(cors())
const server = http.createServer({}, app)
mongoose
    .connect(
        'mongodb://localhost:27017/thales',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/department', departmentRoute);
const port = process.env.PORT || 3300;
server.listen(port, () => {

    console.log(`BE app listening at http://localhost:${port}`);


})