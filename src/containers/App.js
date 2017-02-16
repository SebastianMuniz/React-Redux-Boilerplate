import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import {  } from '../actions/remoteActions';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return (
			<div>
				{this.props.payload}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		payload: state.payload
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);