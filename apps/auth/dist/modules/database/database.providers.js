"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.DATABASE = 'DATABASE';
exports.default = [
    {
        provide: exports.DATABASE,
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'auth',
            password: 'password',
            database: 'auth',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        }),
    },
];
//# sourceMappingURL=database.providers.js.map