const dbUser = 'Koala';
const dbPassword = 290922;

const config = {
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-wuqiz.mongodb.net/test?retryWrites=true&w=majority`,
  secret: 'secret-key',
};

module.exports = config;

// mongodb+srv://Koala:<password>@cluster0-wuqiz.mongodb.net/test?retryWrites=true&w=majority
