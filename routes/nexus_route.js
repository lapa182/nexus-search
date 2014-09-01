module.exports = function(app, request, riotKey) {
  app.get('/form-get', function(req, response) {
 	var request  = require('request-json');
	var summoner = req.query['summoner'],
			url 		 = 
			client 	 = request.newClient('https://br.api.pvp.net/api/lol/br/v1.4/summoner/by-name/Venelope?api_key=c9ebfedc-13c6-4810-bb6b-571d73c4e0a1');
			console.log(summoner)
			response.redirect('/search');
		client.get('/search', function(err, res, body) {
			return res.send(body);
			// response.redirect('/search');
		});
  });
};