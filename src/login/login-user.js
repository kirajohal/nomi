const ReactRethinkdb = require('react-rethinkdb');
const r = ReactRethinkdb.r;
const superagent = require('superagent');

export default function loginUser(email, password) {
  superagent.post('localhost:8015/login');
}
