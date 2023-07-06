import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { Store } from 'express-session'
import authRoute from './Routes/auth/auth.js';


const app = express()
app.use(cors())
app.use(express.json())
app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 2592000000,
		},
	})
);
app.use(cookieParser())


app.use('/api/auth', authRoute);


app.get('/', (req, res) =>{
    res.send('Welcome to the world Spindle Backend')
})

app.listen(process.env.PORT, () =>{
    console.log(`Listening on port ${process.env.PORT}`);
})