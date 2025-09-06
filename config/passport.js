const passportJs = require("passport");
const { User } = require("../src/services/userServices");
const LocalStrategy = require('passport-local').Strategy;

passportJs.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.getUser(email)

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passportJs.serializeUser((user, done) => {
  done(null, user.id);
});

passportJs.deserializeUser(async (id, done) => {
  try {
    const user = await User.getUserById(id)

    done(null, user);
  } catch(err) {
    done(err);
  }
});


module.exports ={ passportJs }