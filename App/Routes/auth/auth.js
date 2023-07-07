// this is where all the create account, login, logout, and forgot password routes are located
// this is where the user is redirected to the correct page after creating an account

import express from 'express';
import db from '../../../Database/models/index.js';
import bcrypt from 'bcrypt';
console.log(db.models.User);

const User = db.models.User;

const router = express.Router();

router.post('/create-account', async (req, res) => {
	const { username, password } = req.body;
	await User.create({
		username: username,
		password: password,
	});
	res.send('gg');
});

export default router;
