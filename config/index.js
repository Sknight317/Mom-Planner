const dbuser = 'Sknight317';
const dbpassword = 'srknigh2';

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds213715.mlab.com:13715/heroku_v9zhvxmd`;

// module.exports = MONGODB_URI;

module.exports = {
    MONGODB_URI,
    secretOrKey: "secret"
  };