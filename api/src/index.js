import app from './app.js';
import sequelize from './database/database.js';
import { initialCriptoLoadingCMC } from './controllers/initDBcmc.controllers.js';
import { getdifDate } from './controllers/getActualPrice.controllers.js';

// import Holding from './models/Holding.js';
// import Operation from './models/Operation.js';
// import Cripto from './models/Cripto.js';

// async function connectionTest(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         app.listen(3001);
//         console.log("listen on port 3001");
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     };
// };

// connectionTest();

sequelize.sync({ force: false })
    .then( () => {
        app.listen(3001, async () => {
            console.log('listening at 3001');
            const difference = await getdifDate();
            if( difference>=1 ) 
                initialCriptoLoadingCMC();
            // console.log( await initialCriptoLoadingCMC());
        });
    })