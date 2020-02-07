import passport = require('passport');
import { Strategy } from 'passport-local';
import userService from '../../user/UserService';

module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        }, async (username: string, password: string, done: any) => {
            const users = await userService.find({ userName: username });
            if (users.length === 0) {
                done(null, false);
            } else {
                const user = users[0];
                if (user.password === password) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            }
        },
    ));
};
