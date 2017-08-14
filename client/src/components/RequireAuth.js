import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequireAuth extends Component {
	constructor() {
		super();
	}


	render() {
		return (
			<div>
				{this.props.authenticated &&
					<div>
						{this.props.children}
					</div>
				}
				{!this.props.authenticated &&
					<div>
						Please login to view.
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}

RequireAuth = connect(mapStateToProps)(RequireAuth);

export default RequireAuth;