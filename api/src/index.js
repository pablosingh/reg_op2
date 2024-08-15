import 'dotenv/config';
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

const port = process.env.PORT || 3001;
// const dbUrl = process.env.DATABASE_URL;

sequelize.sync({ force: false })
    .then( () => {
        app.listen(port, async () => {
            console.log('listening at ', port);
            const difference = await getdifDate();
            if( difference>=1 ) 
                initialCriptoLoadingCMC();
            
        });
    })
// CREATE TABLE "Criptos2" AS SELECT * FROM "Criptos";