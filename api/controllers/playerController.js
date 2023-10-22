import playerModel from '../models/playerModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signup = (req, res, next) => {
    //--------------
    //password crypté sous forme de hash grâce au package de cryptage bcrypt
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const player = new playerModel({
                email: req.body.email,
                password: hash
            });
            player.save()
                .then(() => res.status(201).json({ message: 'player account created !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


export const login = (req, res, next) => {
    console.log(req.body.email)
    playerModel.findOne({ email: req.body.email })
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