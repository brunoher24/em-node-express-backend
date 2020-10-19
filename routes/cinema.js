const express = require('express');
const router = express.Router();

// on importe les fonctions créées dans un module cinema.js
// contenu dans le dossier controllers
const cinemaCtrl = require('../controllers/cinema');


// exécution de telle ou telle fonction du controller requis, 
// en fonction de la méthode de routage et du suffixe d'URL
router.get('/read', cinemaCtrl.read);
router.get('/read/:name', cinemaCtrl.readOne);


module.exports = router;

// create, add
// read, get, find  ===> one / all
// update / modify / change 
// delete
