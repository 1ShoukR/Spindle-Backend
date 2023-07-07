import jwt from 'jsonwebtoken'

export const generateAccessToken = (username) => {
    return jwt.sign(username, process.env.SECRET_KEY, { expiresIn: '1800s' });
};
