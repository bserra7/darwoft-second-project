require('dotenv').config();
const server = require('./src/app');
const { connection } = require('./src/db');
const { DB_PORT } = process.env;

connection.sync({ alter: true })
    .then(() =>{
        server.listen(DB_PORT, (error) => {
            if(error) throw Error("Error in server setup");
            console.log(`API listening at port: ${DB_PORT}`);
        })
    })
    .catch(() => {
        console.log(`Database synchronization failed.\nPlease check for recently changes on Database (i.e Models) and restart the API.`);
    })