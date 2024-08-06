import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Operation from './Operation.js';
import Holding from './Holding.js';

const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    },
    {
      timestamps: false
    }
);

// User.hasMany(Operation, { foreinkey: "userId" });
// Operation.belongsTo(User, { foreignKey: 'userId' });

// User.hasMany(Holding, { foreinkey: "userId" });
// Holding.belongsTo(User, { foreignKey: 'userId'});

export default User;