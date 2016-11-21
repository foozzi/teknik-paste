import request from 'request';

export function paste(params, cb) {
	const formData = {
		'title': params.title,
		'code': params.code
	};

	request.post(
	{
		url:'https://api.teknik.io/v1/Paste', 
		formData
	}, 
	function optionalCallback(err, httpResponse, body) {
	  	if (err) {
	  		return cb(null, err);
	  	}
	  	var response = JSON.parse(body);
	  	return cb(null, response.result.url);
	});
}