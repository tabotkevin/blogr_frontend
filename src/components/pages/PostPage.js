import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import PostForm from "../forms/PostForm";
import { create, update, read } from "../../actions/posts";
import NavContainer from "../containers/NavContainer";
import PageFooter from "../footers/PageFooter";

class PostPage extends React.Component {
	componentDidMount = () => {
		if (this.props.match.params._id) {
			this.props.read(this.props.match.params._id);
		}
	};

	submit = (data) => {
		if (data.get("_id")) {
			this.props.update(data).then(() => this.props.history.push("/posts"));
		} else {
			this.props.create(data).then(() => this.props.history.push("/posts"));
		}
	};

	render() {
		return (
			<div>
				<NavContainer />
				<Container>
					<h1>Make A Post</h1>
					<PostForm submit={this.submit} post={this.props.post} />
				</Container>
				<PageFooter />
			</div>
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
