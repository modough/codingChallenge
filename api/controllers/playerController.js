import playerModel from '../models/playerModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import validator from 'validator';
import sendVerifyEmail from '../utils/sendVerifyEmail.js';


export const register = async (req, res, next) => {
    const { pseudo, email, password, confirmPassword, isVerify } = req.body
    try {
        let player = await playerModel.findOne({ email });
        if (player) return res.status(400).json('Player already exists');
        player = new playerModel({
            pseudo,
            email,
            password: await bcrypt.hash(password, 10),
            emailToken: crypto.randomBytes(64).toString("hex"),
        });
        if (!pseudo || !email || !password) return res.status(400).json("all fields are required...");
        if (password !== confirmPassword) return res.status(400).json("password and confirm password does not match");
        if (!validator.isEmail(email)) return res.status(400).json("Must be a valid email...");
        if (!validator.isStrongPassword(password)) return res.status(400).json("Must be a strong password...");
        const body = await player.save();
        sendVerifyEmail(player);
        return res.status(200).json({ body });
    }
    catch (error) { res.status(500).json({ error }) };
};


export const login = async (req, res, next) => {
    const { pseudo } = req.body;
    console.log(pseudo)
    await playerModel.findOne({ pseudo })
        .then(player => {
            console.log(player)
            if (!player) {
                return res.status(401).json({ error: 'player not found !' });
            }
            bcrypt.compare(req.body.password, player.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong password !' });
                    }
                    res.status(200).json({
                        playerId: player._id,
                        pseudo: player.pseudo,
                        email: player.email,
                        token: jwt.sign(
                            { playerId: player._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

export const verifyEmail = async (req, res) => {
    const { emailToken } = req.body;
    try {
        if (!emailToken) return res.status(404).json('EmailToken not found...');
        const player = await playerModel.findOne({ emailToken });
        if (player) {
            player.emailToken = null;
            player.isVerify = true;
            await player.save();
            res.status(200).json({
                _id: player._id,
                pseudo: player.pseudo,
                email: player.email,
                isVerify: player?.isVerify,
            });
        }
        else res.status(404).json("Email validation error, invalid token!")
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}