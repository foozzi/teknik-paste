var pbin = require('./lib/teknik-paste.js');

pbin.paste({title: 'test', code: 'test bin'}, function(link, err){
	if(err){
		console.log(err)
	}
	console.log(link)
});