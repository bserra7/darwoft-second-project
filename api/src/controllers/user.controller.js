const { User } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const { JWT_SECRET, JWT_EXPIRES, PUBLIC_URL } = process.env;

const errorResponse = (res, error, status = 404) => {
    res.status(status).json({
        success: false,
        error
    })
}

const successResponse = (res, response, status = 200) => {
    res.status(status).json({
        success: true,
        response
    });
}

const getUsers = async (req, res) => {
    try {
        const getAllUsers = await User.findAll();
        if(!getAllUsers) throw new Error("Users not found");

        successResponse(res, getAllUsers);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const login = async (req, res) => {
    try {
        const { email, pass } = req.body;

        const userFind = await User.findOne({ where: { email } });
        if(!userFind) throw new Error("User doesn't found");

        const verifyPass = bcrypt.compare(pass, userFind.password);
        if(!verifyPass) throw new Error("Invalid Password");

        const signature = jwt.sign({ id: userFind.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES });

        const { password, ...user } = userFind.toJSON();

        const userData = { signature, user };

        successResponse(res, userData);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const register = async (req, res) => {
    try {
        const user = req.body;
        console.log(user.email);
        const { image } = req.files;
        const extension = image.name.split('.').pop();

        const hashPass = bcrypt.hashSync(user.password, 10);

        const [ newUser, created ] = await User.findOrCreate({ 
            where: { email: user.email },
            defaults: {
                ...user,
                password: hashPass                
            }
        });

        if(!created) throw new Error("The E-mail is already in use");

        const fileName = `${newUser.id}.${extension}`;
        const filePath = path.join(__dirname, '..', 'userpics', fileName);
        const error = await image.mv(filePath);
        if (error) throw new Error("Error on image saved");

        newUser.image = `${PUBLIC_URL}/${fileName}`;
        await newUser.save();       

        successResponse(res, "User registered successfully", 201)
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const checkCredentials = async (req, res, next) => {
    try {
        if(!req.headers.authorization) throw new Error("Token not found");
        const signature = req.headers.authorization.split(' ')[1];

        const data = jwt.verify(signature, JWT_SECRET);
        req.userId = data.id;

        next();        
    } catch (error) {
        errorResponse(res, error.message, 403);
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.userId;

        const deletedUser =  await User.destroy({ where: { id: userId } });
        if(!deletedUser) throw new Error("User doesn't exist");

        successResponse(res, "User deleted successfully", 202);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = req.body;

        const result = await User.update({ ...user }, { where: { id: userId } });
        if(!result) throw new Error("User can't be updated");

        successResponse(res, "User updated successfully", 201);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const authenticate = async (req, res) => {
    try {
        const userId = req.userId;

        const userFind = await User.findByPk(userId);
        if(!userFind) throw new Error("User doesn't found");

        const { password, ...user } = userFind.toJSON();

        successResponse(res, user, 201);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

module.exports = {
    getUsers,
    login, 
    register,
    checkCredentials,
    deleteUser,
    updateUser,
    authenticate
}