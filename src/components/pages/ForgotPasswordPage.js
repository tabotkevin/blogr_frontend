import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends React.Component {
	state = {
		success: false,
	};

	submit = (data) =>
		this.props
			.resetPasswordRequest(data)
			.then(() => this.setState({ success: true }));

	render() {
		const Styles = {
			grid: { height: "100%" },
			image: { marginTop: "250px" },
			column: { maxWidth: "450px" },
		};

		return (
			<div>
				{this.state.success ? (
					<Message>Email has been sent.</Message>
				) : (
					<div
						className="ui middle aligned center aligned grid"
						style={Styles.grid}
					>
						<div className="column" style={Styles.column}>
							<h2 className="ui image header" style={Styles.image}>
								<div className="content">Forgot password</div>
							</h2>
							<ForgotPasswordForm submit={this.submit} />
							<div className="ui message">
								Have a account? <Link to="/login">Login</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

ForgotPasswordPage.propTypes = {
	resetPasswordRequest: PropTypes.func.isRequired,
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
