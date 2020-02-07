import passport = require('passport');
import User from '../models/User';

module.exports = function passportConfig(app: any) {
    app.use(passport.initialize());
    app.use(passport.session());
    // Stores user in session
    passport.serializeUser((user: User, done: any) => {
        done(null, user);
    });

    // Retrieves user from session
    passport.deserializeUser((user: User, done: any) => {
        done(null, user);
    });

    require('./auth-strategies/local.strategy')();
};
