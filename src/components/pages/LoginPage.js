import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {
	submit = (data) =>
		this.props.login(data).then(() => this.props.history.push("/dashboard"));

	render() {
		const Styles = {
			grid: { height: "100%" },
			image: { marginTop: "250px" },
			column: { maxWidth: "450px" },
		};

		return (
			<div
				className="ui middle aligned center aligned grid"
				style={Styles.grid}
			>
				<div className="column" style={Styles.column}>
					<h2 className="ui image header" style={Styles.image}>
						<div className="content">Log-in to your account</div>
					</h2>
					<LoginForm submit={this.submit} />
					<div className="ui message">
						New to us? <Link to="/signup">Register</Link>
					</div>

					<div className="ui horizontal divider">Or</div>
					<Link to="/forgot_password">Forgot Password?</Link>
				</div>
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
