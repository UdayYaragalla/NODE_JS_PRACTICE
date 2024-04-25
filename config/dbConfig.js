// const mysql = require('mysql2')

// /* DB Configuration */
// const config = {
//     debug   : true,
//     port    : 3306,
//     mysql   : {
//         host    : 'localhost',
// 		username: 'pic',
// 		password: 'picadmin',
// 		database: 'nodedb'
//     }
// }

// /* DB Connection */
// const connection = mysql.createConnection({
//     host        : config.mysql.host,
//     port        : config.port,
//     user        : config.mysql.username,
//     password    : config.mysql.password,
//     database    : config.mysql.database,
//     insecureAuth: false
// })

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodedb', 'pic', 'picadmin', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        // acquire: 30000,/*  acquire is wait time for the connection we should not mention */
        idle:1000, /* This is the max time wait for the connection */
    },
    dialectOptions: {
        connectTimeout: 60000, // Timeout (in milliseconds) for establishing a connection
        // requestTimeout: 60000, // Timeout (in milliseconds) for executing a query
        // For SSL connections)
    },
});

module.exports = sequelize

