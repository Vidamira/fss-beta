const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json('connection test for endpoint working')
}

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
}

module.exports = {
    test,
    registerUser
}