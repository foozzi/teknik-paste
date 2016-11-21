# teknik-paste

![teknik](https://teknik-5b3f.kxcdn.com/Images/logo-black.svg)

## Install
```bash
$ npm install teknik-paste
```

## How to
```js
var tpaste = require('teknik-paste');
tpaste.paste({title: 'test', code: 'test pbin'}, function(link, err){
	if(err){
		console.log(err)
	}
	console.log(link)
});
```
## Test
```bash
$ npm test
```
