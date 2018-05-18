import r from 'rethinkdb';

export default async function registerUser(email, password) {
  const connection = await r.connect({
    host: 'localhost',
    port: 28015,
    authKey: '',
    db: 'nomi',
  });

  const insertResult = await r.table('users').insert({
    email,
    password,
  });

  console.log(insertResult);
}
