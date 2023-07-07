import jwt from 'jsonwebtoken';

export const generateAccessToken = (username) => {
	return jwt.sign(username, process.env.SECRET_KEY, { expiresIn: '1800s' });
};

export const authenticateToken = (req, res, next) => {
	// Extract the JWT token from the request headers, query string, or cookies
	const token = req.headers.authorization || req.query.token || req.cookies.token;

	if (!token) {
		// If no token is found, return an error response
		return res.status(401).json({ error: 'No token found' });
	}

	try {
		// Verify and decode the JWT token
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		// Attach the decoded token to the request object for further use
		req.user = decoded;

		// Continue to the next middleware or route handler
		next();
	} catch (error) {
		// If token verification fails, return an error response
		return res.status(401).json({ error: 'Invalid token' });
	}
};