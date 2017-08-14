module.exports = { 
	// Setting port for server
	'port': process.env.PORT || 3000,
	// Database connection information
	//'database': 'postgres://xenovia@localhost/arts',
	'database': 'postgres://wgqjvcbtgbleei:f1566cf611b7dcb79a2bfb47620e28cf1d9734900e22b9dc0fb7b2ebf25ced3d@ec2-23-23-228-115.compute-1.amazonaws.com:5432/da5qe5b0hu9jds',
	// Secret key for JWT signing and encryption
	'secret': 'super secret passphrase'
}