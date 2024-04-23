const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authController')

//middle
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/admin', registerUser)
router.post('/login', loginUser)
router.post('/admin', getProfile)

module.exports = router