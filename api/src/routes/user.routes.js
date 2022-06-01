const { Router } = require('express');
const userRoutes = Router();
const { getUsers, login, register, checkCredentials, deleteUser, updateUser } = require('../controllers/user.controller');

userRoutes.get('/', getUsers);

userRoutes.post('/login', login);

userRoutes.post('/register', register);

userRoutes.delete('/delete', checkCredentials, deleteUser);

userRoutes.put('/update', checkCredentials, updateUser);

module.exports = userRoutes;