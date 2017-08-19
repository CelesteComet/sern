const env = 'dev';
const port = process.env.PORT || 3000;

if(env == 'dev') {
	var opts = {
		API_URL: 'http://localhost:' + port,
		database_URL: 'postgres://xenovia@localhost/arts',
		pg_ssl_default: false
	}
} else {
	var opts = {
		API_URL: 'https://sernstarter.herokuapp.com',
		database_URL: 'postgres://wgqjvcbtgbleei:f1566cf611b7dcb79a2bfb47620e28cf1d9734900e22b9dc0fb7b2ebf25ced3d@ec2-23-23-228-115.compute-1.amazonaws.com:5432/da5qe5b0hu9jds',
		pg_ssl_default: true 
	}
}

// For Both Dev and Prod
opts.port = port;
opts.secret = 'super secret';

module.exports = opts;
