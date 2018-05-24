const ReactRethinkdb = require('react-rethinkdb');
const r = ReactRethinkdb.r;
const superagent = require('superagent');

export default function loginUser(email, password) {
  // TODO: Add the username and password to this post and things should work !
  superagent.post('localhost:8015/login');
}
