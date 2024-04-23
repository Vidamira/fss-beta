const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('connection test for endpoint working')
}

//add user for admin dashboard endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //check if name input was filled
        if(!name) {
            return res.json({
                error:'name required'
            })
        };

        //check if password input was filled and check string lentgth
        if(!password || password.length < 8) {
            return res.json({
                error:'password required & minimim 8 characters'
            })
        };

        //check if email already exists
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error:'email already in use'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name, 
            email,
            password: hashedPassword,
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
};

//login endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check if user exists
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'User not found'
            })
        }

        //check password and jsonwebtoken
        const match = await comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if(!match) {
            res.json({
                error: "oops... passwords dont't match"
            })
        }
    } catch (error) {
        console.log(error)
    }
};

const getProfile = (req,res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};