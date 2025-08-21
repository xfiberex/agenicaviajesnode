import Sequelize from "sequelize";
import dotenv from "dotenv";

// Para tener acceso a las varibles del entorno
dotenv.config();
// console.log(process.env.DATABASE); // Para probar las variables

// Para desarrollo
// const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "mysql",
//     define: {
//         timestamps: false,
//     },
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
//     operatorAliases: false,
// });

// Para producción
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorAliases: false,
});

export default db;
