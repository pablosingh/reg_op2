import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Cripto = sequelize.define('Cripto', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cripto:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.FLOAT
        },
        update:{
            type: DataTypes.DATE
        }
    },
    {
        timestamps: false
    }
);

export default Cripto;