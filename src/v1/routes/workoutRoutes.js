const express = require("express");
const router = express.Router();

router
    .get ("/", (req,res) =>{
        res.send('Obtener todos los WorkOuts');
    })
    .get ("/:workoutId", (req,res) =>{
        res.send(`Obtener WorkOut ${req.params.workoutId}`);
    })
    .post ("/:workoutId", (req,res) =>{
        res.send(`Crear WorkOut ${req.params.workoutId}`);
    })
    .patch ("/:workoutId", (req,res) =>{
        res.send(`Editar WorkOut ${req.params.workoutId}`);
    })
    .delete ("/:workoutId", (req,res) =>{
        res.send(`Eliminar WorkOut ${req.params.workoutId}`);
    })