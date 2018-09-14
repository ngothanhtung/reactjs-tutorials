import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Icon, Badge } from 'antd';

class ScoreBadge extends Component {
	render() {
		return (
			<span style={{ marginRight: 20, marginLeft: 20, display: this.props.score > 0 ? 'block' : 'none' }}>
				<Badge count={this.props.score} style={{ boxShadow: 'none' }}>
					<Icon type="bell" style={{ fontSize: 18 }} />
				</Badge>
			</span>
		)
	}
}

const mapStateToProps = (state) => ({
	// loggedInUser: state.loginReducer.loggedInUser,
	score: state.quizReducer.score,
});

const mapDispatchToProps = (dispatch) => ({
	// loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBadge);