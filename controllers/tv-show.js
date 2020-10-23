const tvShowService = require('../services/tv-show-service');

exports.read = (req, res) => {
  tvShowService.get(req.params.pageNumber)
  .then(shows => res.status(200).json(shows))
  .catch(error => res.status(500).send(error));
};


exports.readOne = (req, res, next) => {
  // ... du code
}; 
