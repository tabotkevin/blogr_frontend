import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends React.Component {
	submit = (data) =>
		this.props.signup(data).then(() => this.props.history.push("/login"));

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
						<div className="content">Create a new account</div>
					</h2>
					<SignupForm submit={this.submit} />
					<div className="ui message">
						Have a account? <Link to="/login">Login</Link>
					</div>
				</div>
			</div>
		);
	}
}

SignupPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);
