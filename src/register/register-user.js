const ReactRethinkdb = require('react-rethinkdb');
const r = ReactRethinkdb.r;

export default function registerUser(email, password) {
  const query = r.table('users').insert({
    email,
    password
  });

  ReactRethinkdb.DefaultSession.runQuery(query);
}
