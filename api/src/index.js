import app from './app.js';
import sequelize from './database/database.js';
import { initialCriptoLoadingCMC } from './controllers/initDBcmc.controllers.js';
import { getdifDate } from './controllers/getActualPrice.controllers.js';

import Holding from './models/Holding.js';
import Operation from './models/Operation.js';
import Cripto from './models/Cripto.js';
import User from './models/User.js';

User.hasMany(Holding, { foreinkey: "UserId" });
Holding.belongsTo(User, { foreignKey: 'UserId'});

Holding.hasMany(Operation, { foreinkey: "HoldingId" });
Operation.belongsTo(Holding, { foreignKey: 'HoldingId' });


sequelize.sync({ force: false })
    .then( () => {
        app.listen(3001, async () => {
            console.log('listening at 3001');
            const difference = await getdifDate();
            if( difference>=1 ) 
                initialCriptoLoadingCMC();
            
        });
    })
// CREATE TABLE "Criptos2" AS SELECT * FROM "Criptos";