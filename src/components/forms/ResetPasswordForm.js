import React from "react";
import PropTypes from "prop-types";
import { Form, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class ResetPasswordForm extends React.Component {
	state = {
		data: {
			token: this.props.token,
			password: "",
			passwordConfirmation: "",
		},
		loading: false,
		errors: {},
	};

	onChange = (e) =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value },
		});

	onSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.submit(this.state.data)
				.catch((err) =>
					this.setState({ errors: err.response.data.errors, loading: false })
				);
		}
	};

	validate = (data) => {
		const errors = {};
		if (!data.password) errors.password = "Can't be blank";
		if (data.password !== data.passwordConfirmation)
			errors.password = "Passwords must match";
		return errors;
	};

	render() {
		const { errors, data, loading } = this.state;

		return (
			<Form
				onSubmit={this.onSubmit}
				loading={loading}
				className="ui large form"
			>
				{errors.global && (
					<Message negative>
						<Message.Header>Something went wrong</Message.Header>
						<p>{errors.global}</p>
					</Message>
				)}
				<div className="ui stacked secondary  segment">
					<Form.Field error={!!errors.password}>
						<div className="ui left icon input">
							<i className="lock icon" />
							<input
								type="password"
								id="password"
								name="password"
								placeholder="your new password"
								value={data.password}
								onChange={this.onChange}
							/>
							{errors.password && <InlineError text={errors.password} />}
						</div>
					</Form.Field>

					<Form.Field error={!!errors.passwordConfirmation}>
						<div className="ui left icon input">
							<i className="lock icon" />
							<input
								type="password"
								id="passwordConfirmation"
								name="passwordConfirmation"
								placeholder="type it again, please"
								value={data.passwordConfirmation}
								onChange={this.onChange}
							/>
							{errors.passwordConfirmation && (
								<InlineError text={errors.passwordConfirmation} />
							)}
						</div>
					</Form.Field>

					<button className="ui fluid large primary submit button">
						Reset
					</button>
				</div>
			</Form>
		);
	}
}

ResetPasswordForm.propTypes = {
	submit: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired,
};

export default ResetPasswordForm;
