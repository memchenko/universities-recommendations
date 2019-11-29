import { Sequelize } from 'sequelize-typescript';

import { DIALECT, NAME, USERNAME, PASSWORD, HOST, PORT } from '../constants/db';

export const sequelize = new Sequelize(NAME, USERNAME, PASSWORD, {
    dialect: DIALECT,
    host: HOST,
    port: PORT,
    define: {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    },
    models: [process.cwd() + '/src/**/*.models.ts'],
});

sequelize.sync();