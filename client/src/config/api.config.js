import serverConfig from '../../../config/main';

const env = 'dev';

if(env == 'dev') {
	var opts = {
		API_URL: 'http://localhost:' + serverConfig.port + '/api'
	}
} else {
	var opts = {
		API_URL: 'https://sernstarter.herokuapp.com'
	}
}

export default opts;
