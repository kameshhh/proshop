import asyncHandler from "express-async-handler"
import User from '../models/userModel.js'
import generateToken from "../utills/generateToken.js"


//auth user and get token
const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }

})


// get user prifile
const getUserProfile = asyncHandler(async(req, res) => {

    res.send('success')
})

export { authUser, getUserProfile }