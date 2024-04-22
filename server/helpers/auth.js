const bcrypt = require('bcrypt')

// hash password with bcrypt
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        
        //change salt value as needed or security
        bcrypt.genSalt(12, (err, salt) => {
            if(err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err,hash) => {
                if(err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

// compare password with login api
const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}