const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model = require('../models/user');
const env = require("../../env");


const findUser = (email) => {
    return model.findOne({ email })
}


const generateToken = (user) => {
    const expiration =
        Math.floor(Date.now() / 1000) + 60 * 10

    return jwt.sign(
        {
            data: {
                _id: user
            },
            exp: expiration
        },

        env.jsonToken
    )
}


exports.login = async (req, res) => {
    const body = req.body;
    const user = await findUser(body.email)

    bcrypt.compare(body.password, user.password, function (err, result) {
        if (result) {
            const token = generateToken(user)
            res.send({ token });
            
        } else {
            res.send({ data: 'Incorrect' })
        }
    });
};
