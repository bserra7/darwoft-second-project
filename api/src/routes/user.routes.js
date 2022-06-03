const { Router } = require('express');
const userRoutes = Router();
const { getUsers, login, register, checkCredentials, deleteUser, updateUser, authenticate } = require('../controllers/user.controller');

userRoutes.get('/', getUsers);

userRoutes.post('/login', login);

userRoutes.post('/register', register);

userRoutes.delete('/delete', checkCredentials, deleteUser);

userRoutes.patch('/update', checkCredentials, updateUser);

userRoutes.get('/authenticate', checkCredentials, authenticate);

module.exports = userRoutes;