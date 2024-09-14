import { Sequelize } from "sequelize";
import { config } from 'dotenv';
import pg from 'pg';
config();
const DATABASE_URL = process.env.DATABASE_URL;
const POSTGRES_URL = process.env.POSTGRES_URL;
const miURL = "postgres://default:u6gCaHS7WhQo@ep-calm-leaf-a4fesg0n-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"


// const sequelize = new Sequelize(DATABASE_URL,{
//     dialect: 'postgres',
//     logging: false,
//     dialectOptions: {
//         ssl: {
//         require: true, // Requiere SSL
//         rejectUnauthorized: false // Establecer en true si el certificado es válido
//         }
//     }
// });
// ============================================================================
// const sequelize = new Sequelize('portafoliotest','postgres','postgres',{
//     host: 'localhost',
//     dialect: 'postgres',
// });
// ============================================================================
const sequelize = new Sequelize(DATABASE_URL,{
    dialect: 'postgres',
    logging: false,
    dialectModule: pg,
    // dialectOptions: {
    //     ssl: {
    //     require: true, // Requiere SSL
    //     rejectUnauthorized: false // Establecer en true si el certificado es válido
    //     }
    // }
});
export default sequelize;