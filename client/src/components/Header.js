import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<div className="navbar navbar-default">
			<a className="navbar-brand">Taiwan Performing Arts</a>
			{ !props.authenticated && 
				<Link to={'/login'}>
					<button type="button" className="btn btn-default navbar-btn">Login</button>
				</Link>
			}	
			{ props.authenticated && 
				<button type="button" className="btn btn-default navbar-btn" onClick={props.logoutUser}>Log Out</button>
			}	
			{ props.children }
			<Link to={'/venues'}>
				<button type="button" className="btn btn-default navbar-btn">Venues</button>
			</Link>
			<Link to={'/dashboard'}>
				<button type="button" className="btn btn-default navbar-btn">Dashboard</button>
			</Link>
			<Link to={'/venues/create'}>
				<button type="button" className="btn btn-default navbar-btn">Create</button>
			</Link>
		</div>
	);
}

export default Header;