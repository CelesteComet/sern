import serverConfig from '../../../config/main';

const env = 'prod';

if(env == 'dev') {
	var opts = {
		API_URL: 'http://localhost:' + serverConfig.port
	}
} else {
	var opts = {
		API_URL: 'https://sernstarter.herokuapp.com'
	}
}

export default opts;
