const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userSchema');

const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new UserModel({
        userName: req.body.userName,
        password: hashedPassword,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber
    });

    try {
        const ifUserExist = await UserModel.findOne({ userName: req.body.userName });

        if (ifUserExist) {
            return res.status(400).json({ message: 'User Already Exists' });
        }

        const user = await newUser.save();
        const token = jwt.sign(
            { userName: user.userName, id: user._id },
            "ChatMingle", // Ensure this matches your environment variable
            { expiresIn: "1h" }
        );

        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Unauthorized User!" });
        }

        const token = jwt.sign(
            {
                userName: user.userName,
                id: user._id,
                email: user.email,
                mobileNumber: user.mobileNumber
            },
            "ChatMingle", // Ensure this matches your environment variable
            { expiresIn: "1h" }
        );

        res.status(201).json({ message: "Logged In", token: token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    registerUser,
    loginUser
};
