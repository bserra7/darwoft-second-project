const { Router } = require("express");
const router = Router();

// Routes 
const register = require('./createUser-route');
const login = require("./login-route");
const update = require('./updateUser-route')
const deleteUser = require("./deleteUser-route");
const addItem = require("./createItem-route");
const allItems = require("./getItems-route");
const deleteItems = require("./deleteItems-route");
const auth = require("./authenticate-route");
const setNewPass = require("./setNewPassword-route");
const resetPass = require("./resetPassword-route");
const addCategory = require("./createCategory-route");
const allCategories = require("./getCategories-route");

// Middlewares
const checkCredentials = require("../controllers/checkCredentials");

// Routing
router.use('/register', register);

router.use('/updateUser', update);

router.use('/login', login);

router.use('/deleteUser', checkCredentials, deleteUser);

router.use('/addItem', addItem);

router.use('/getItems', allItems);

router.use('/deleteItem', checkCredentials, deleteItems);

router.use('/authenticate', checkCredentials, auth);

router.use('/password', checkCredentials, setNewPass);

router.use('/resetPassword', resetPass);

router.use('/addCategory', addCategory);

router.use('/getCategories', allCategories);

module.exports = router;