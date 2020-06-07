import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import PostForm from "../forms/PostForm";
import { create, update, read } from "../../actions/posts";

class PostPage extends React.Component {
	componentDidMount = () => {
		if (this.props.match.params._id) {
			this.props.read(this.props.match.params._id);
		}
	};

	submit = (data) => {
		console.log("The _id is ", data.get("_id"));
		console.log("is null ", data.get("_id") === "");
		if (data.get("_id")) {
			console.log("_id updating");
			this.props.update(data).then(() => this.props.history.push("/posts"));
		} else {
			console.log("No _id creating");
			this.props.create(data).then(() => this.props.history.push("/posts"));
		}
	};

	render() {
		return (
			<Container>
				<h1>Make A Post</h1>
				<PostForm submit={this.submit} post={this.props.post} />
			</Container>
		);
	}
}

PostPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	create: PropTypes.func.isRequired,
	update: PropTypes.func.isRequired,
	read: PropTypes.func.isRequired,
	// eslint-disable-next-line react/require-default-props
	match: PropTypes.shape({
		params: PropTypes.shape({
			_id: PropTypes.string,
		}),
	}),
	// eslint-disable-next-line react/require-default-props
	post: PropTypes.shape({
		_id: PropTypes.string,
		title: PropTypes.string,
		body: PropTypes.string,
	}),
};

function mapStateToProps(state, props) {
	if (props.match.params._id) {
		return {
			post: state.posts.find((item) => item._id === props.match.params._id),
		};
	}
	return {
		post: null,
	};
}

export default connect(mapStateToProps, { create, update, read })(PostPage);
