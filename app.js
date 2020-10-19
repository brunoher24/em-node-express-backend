const express = require('express');
const app = express();

// on constitue un dossier 'routes' qui contiendra les modules de 
// 'dispatch', chargés selon le suffixe du chemin de routage et la méthode de routage
// (get, post, put, delete ...)
const cinemaRoutes = require('./routes/cinema');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// on éxécute le module du dossier 'routes' correspondant 
// au chemin de routage ex: http://localhost:3000/api/mon_chemin

// app.use(...fichier correspondant à mon_chemin.js...)


module.exports = app;

