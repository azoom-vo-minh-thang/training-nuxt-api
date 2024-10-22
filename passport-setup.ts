// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import bcrypt from 'bcrypt';
// import { Strategy as FacebookStrategy } from 'passport-facebook';
// import dotenv from 'dotenv';

// import prisma from '@root/database';

// dotenv.config();

// passport.use(new LocalStrategy({
//   usernameField: 'email',
// }, async (email: string, password: string, done) => {
//   try {
//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user) {
//       return done(null, false, { message: 'Incorrect email or password.' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return done(null, false, { message: 'Incorrect email or password.' });
//     }

//     return done(null, user);
//   } catch (error) {
//     return done(error);
//   }
// }));

// passport.serializeUser((user: any, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id: number, done) => {
//   try {
//     const user = await prisma.user.findUnique({ where: { id } });
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_APP_ID!,
//   clientSecret: process.env.FACEBOOK_APP_SECRET!,
//   callbackURL: process.env.FACEBOOK_CALLBACK_URL!,
//   profileFields: ['id', 'displayName', 'email'],
// }, async (_accessToken, _refreshToken, profile, done) => {
//   try {
//     const user = await prisma.user.upsert({
//       where: { email: profile._json.email },
//       update: {},
//       create: {
//         email: profile._json.email,
//         name: profile.displayName,
//         facebookId: profile.id
//       },
//     });
//     return done(null, user);
//   } catch (error) {
//     return done(error);
//   }
// }));
