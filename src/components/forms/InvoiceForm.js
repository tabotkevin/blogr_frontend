import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class InvoiceForm extends React.Component {
	state = {
		selectedFile: "",
		loading: false,
		errors: {},
	};

	onChange = (e) => {
		this.setState({
			...this.state,
			selectedFile: e.target.files[0],
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate(this.state.selectedFile);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			const data = new FormData();
			data.append("file", this.state.selectedFile);
			this.setState({ loading: true });
			this.props
				.submit(data)
				.then(() => this.setState({ loading: false }))
				.catch((err) =>
					this.setState({ errors: err.response.data.errors, loading: false })
				);
		}
	};

	validate = (selectedFile) => {
		const errors = {};
		if (!selectedFile) errors.file = "Can't be Empty";
		return errors;
	};

	render() {
		const { errors, loading } = this.state;

		return (
			<Form
				onSubmit={this.onSubmit}
				loading={loading}
				encType="multipart/form-data"
			>
				{errors.global && (
					<Message negative>
						<Message.Header>Something went wrong</Message.Header>
						<p>{errors.global}</p>
					</Message>
				)}
				<Form.Field error={!!errors.file}>
					<label htmlFor="file">Upload File</label>
					<input type="file" name="selectedFile" onChange={this.onChange} />
					{errors.file && <InlineError text={errors.file} />}
				</Form.Field>

				<Button primary>Upload</Button>
			</Form>
		);
	}
}

InvoiceForm.propTypes = {
	submit: PropTypes.func.isRequired,
};

export default InvoiceForm;
