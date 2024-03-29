const express = require('express');

var app = express();

app.get('/', (req, res) => {
	// res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'Peter',
		likes: [
			'Dance',
			'Movies',
			'Food',
			'Travel'
		]
	});
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.get('/bad', (req,res) => {
	res.send({
		errorMessage: 'Unable to handle request'
	});
});

// port
app.listen(3000);