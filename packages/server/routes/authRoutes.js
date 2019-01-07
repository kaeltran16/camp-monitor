import passport from 'passport';
import express from 'express';

const router = express.Router();

router.get('/', passport.authenticate('google', {
   scope: ['profile', 'email']
}, () => console.log('connected')));

router.get('/callback', passport.authenticate('google'));

export default router;
