import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class PostForm extends React.Component {
	state = {
		data: {
			image: "",
			_id: this.props.post ? this.props.post._id : "",
			title: this.props.post ? this.props.post.title : "",
			body: this.props.post ? this.props.post.body : "",
		},
		loading: false,
		errors: {},
	};

	componentWillReceiveProps(nextProps) {
		this.setState({ data: nextProps.post });
	}

	onChangeText = (e) =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value },
		});

	onChangeImage = (e) => {
		this.setState({
			...this.state,
			data: { ...this.state.data, image: e.target.files[0] },
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		const { data } = this.state;
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			const formData = new FormData();
			Object.keys(data).forEach((key) => formData.append(key, data[key]));
			this.setState({ loading: true });
			this.props.submit(formData);
			// .catch((err) =>
			// 	this.setState({ errors: err.response.data.errors, loading: false })
			// );
		}
	};

	validate = (data) => {
		const errors = {};

		if (!data.title) errors.title = "Can't be blank";
		if (!data.body) errors.body = "Can't be blank";

		return errors;
	};

	render() {
		const { data, errors, loading } = this.state;

		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				{errors.global && (
					<Message negative>
						<Message.Header>Something went wrong</Message.Header>
						<p>{errors.global}</p>
					</Message>
				)}
				<Form.Field error={!!errors.image}>
					<label htmlFor="file">Image</label>
					<input type="file" name="image" onChange={this.onChangeImage} />
					{errors.image && <InlineError text={errors.image} />}
				</Form.Field>
				<Form.Field error={!!errors.name}>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Post title"
						value={data.title}
						onChange={this.onChangeText}
					/>
					{errors.title && <InlineError text={errors.title} />}
				</Form.Field>

				<Form.Field error={!!errors.body}>
					<label htmlFor="body">Body</label>
					<textarea
						id="body"
						name="body"
						onChange={this.onChangeText}
						value={data.body}
					/>
					{errors.body && <InlineError text={errors.body} />}
				</Form.Field>

				<Button primary>Post</Button>
			</Form>
		);
	}
}

PostForm.propTypes = {
	submit: PropTypes.func.isRequired,
	// eslint-disable-next-line react/require-default-props
	post: PropTypes.shape({
		_id: PropTypes.string,
		title: PropTypes.string,
		body: PropTypes.string,
	}),
};

export default PostForm;
