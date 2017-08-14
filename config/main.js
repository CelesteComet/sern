module.exports = { 
	// Setting port for server
	'port': process.env.PORT || 3000,
	// Database connection information
	'database': 'postgres://xenovia@localhost/arts',
	// Secret key for JWT signing and encryption
	'secret': 'super secret passphrase'
}