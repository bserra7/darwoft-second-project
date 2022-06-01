const { Router } = require("express");
const router = Router();

// Routes 
const userRoutes = require("./user.routes");

// Middlewares

// Routing
router.use('/user', userRoutes);

module.exports = router;