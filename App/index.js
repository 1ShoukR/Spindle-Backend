import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { Store } from 'express-session'
import authRoute from './Routes/auth/auth.js';
import db from '../Database/models/index.js'

const app = express()

// Generates new secret for JWT tokens. Save this as SECRET_KEY
// in the .env file, and access it that way.

// import crypto from 'crypto'
// console.log(crypto.randomBytes(64).toString('hex'));


// Middleware
app.use(cors())
app.use(express.json())
app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 2592000000,
		},
	})
);
(async () => {
	await db.sequelize.sync();
})();
// app.use(cookieParser())

// Route setting
app.use('/api/auth', authRoute);


app.get('/', (req, res) =>{
    res.send('Welcome to the world Spindle Backend')
})

app.listen(process.env.PORT, () =>{
    console.log(`Listening on port ${process.env.PORT}`);
})