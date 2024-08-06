import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import User from './User.js'

const Operation = sequelize.define('Operations',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE
        },
        ticker:{
            type: DataTypes.STRING
        },
        amount:{
            type: DataTypes.FLOAT
        },
        price:{
            type: DataTypes.FLOAT
        },
        total:{
            type: DataTypes.FLOAT
        },
        buy:{
            type: DataTypes.BOOLEAN
        },
        exchange: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING
        },
        // userId: {              // Clave externa que hace referencia a la tabla User
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: User,    // Nombre del modelo de referencia
        //       key: 'id'         // Clave primaria en la tabla User
        //     }
        // }
    },
    {
        timestamps: false
    }
);

export default Operation;