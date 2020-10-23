const unirest = require("unirest");

const MOVIE_API_KEY 	= '1a2a2419637d875bc6622b9de50ab62d';
const MOVIE_API_URL 	= 'https://api.themoviedb.org/3/tv/popular';

exports.get = pageNumber => {
	return new Promise( (resolve, reject) => {
		const req = unirest("GET", MOVIE_API_URL);
		// https://data.iledefrance.fr/api/records/1.0/search/?dataset=les_salles_de_cinemas_en_ile-de-france&rows=30
        
		req.query({
            "page": pageNumber,
			"r": "json",
			"language": "fr",
			"api_key": MOVIE_API_KEY
        });

		req.end(response => {
			if (response.error) {
				reject(new Error(response.error));
			} else {
				resolve(response.body);
			}
		});
	});
  };
  