const loops = require('./loops/loops.service.js');
const users = require('./users/users.service.js');
const claims = require('./claims/claims.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(loops);
  app.configure(users);
  app.configure(claims);
};
