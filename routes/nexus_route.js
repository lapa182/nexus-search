module.exports = function(app, riotKey) {
  app.get('/summoner', function(req, response) {
 	var request  = require('request');
	var summoner = req.query['summoner'],
			client 	 = request.get('https://br.api.pvp.net/api/lol/br/v1.2/champion?api_key='+riotKey);
		request.get('https://br.api.pvp.net/api/lol/br/v1.4/summoner/by-name/'+summoner+'?api_key='+riotKey, function(error, res, body) {
			var data = JSON.parse(body);
			response.render('summoner', {data: data});
		});
  });
};