const startServer = require('./src/server');
const connectToDb = require('./src/db/conectToDb');
const config = require('./config');

const port = process.env.PORT || 3001;

startServer(port);
connectToDb(config.databaseUrl);
