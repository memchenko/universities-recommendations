const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'universities',
    password: 'password',
    database: 'universities',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/**/migrations/**/*.js'],
    synchronize: false,
    cli: {
      entitiesDir: 'src',
      migrationsDir: 'src/modules/database/migrations'
    },
    namingStrategy: new SnakeNamingStrategy(),
  }