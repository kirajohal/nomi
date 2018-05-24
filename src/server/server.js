// Import third-party libraries (managed by npm)
var express = require('express');
var session = require('express-session');
var http = require('http');
var RethinkdbWebsocketServer = require('rethinkdb-websocket-server');

// Set up an HTTP route to serve files from assets/
const app = express();
const httpServer = http.createServer(app);

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure rethinkdb-websocket-server to listen on the /db path and proxy
// incoming WebSocket connections to the RethinkDB server running on localhost
// port 28015. Because unsafelyAllowAnyQuery is true, any incoming query will
// be accepted (not safe in production).
RethinkdbWebsocketServer.listen({
  httpServer: httpServer,
  httpPath: '/db',
  dbHost: 'localhost',
  dbPort: 28015,
  unsafelyAllowAnyQuery: true,
});

app.use(session({ secret: 'deathdeathdeath' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    const storedUsername = 'delliott';
    const storedPassword = 'password';

    if (storedUsername === username && storedPassword === password) {
      return done(null, { username, password });
    } else {
      return done(null, false, { message: 'Failed to Authenticate' });
    }

    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.post('/login', passport.authenticate('local'), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

// require('../routes.js')(app,passport);

// Start the HTTP server on port 8015
httpServer.listen(8015);
console.log('Database Server Started');
