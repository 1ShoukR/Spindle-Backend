// this is where all the create account, login, logout, and forgot password routes are located
// this is where the user is redirected to the correct page after creating an account

import express from 'express';
import db from '../../../Database/models/index.js';
import { generateAccessToken } from '../../../Utilities/index.js';
import bcrypt from 'bcrypt';
console.log(db.models.User);

const User = db.models.User;

const router = express.Router();

router.post('/create-account', async (req, res) => {
	const { username, password } = req.body;
	const alreadyAUser = await User.findOne({
		where: {
			username: username,
		},
	});
	if (alreadyAUser) {
		res.status(400).json({ status: 400, error: 'There is already a user with these credentials' });
	} else {
		const createNewUser = await User.create({
			username: username,
			password: password,
		});
		const token = generateAccessToken({ username: username });
		const response = {
			message: 'user has been created',
			status: 200,
			token: token,
			user: createNewUser,
		};
		res.status(200).json(response);
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
});

export default router;
