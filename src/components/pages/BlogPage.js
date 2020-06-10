import React from "react";
import PropTypes from "prop-types";
import { Message, Icon, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { blog } from "../../actions/posts";
import BlogPosts from "./BlogPosts";
import NavContainer from "../containers/NavContainer";
import PageFooter from "../footers/PageFooter";

class BlogPage extends React.Component {
	state = {
		loading: true,
		success: false,
		errors: {},
	};

	componentDidMount() {
		this.props
			.blog()
			.then(() =>
				this.setState({
					loading: false,
					success: true,
				})
			)
			.catch((err) =>
				this.setState({
					loading: false,
					success: false,
					errors: err.response.data.errors,
				})
			);
	}

	render() {
		const { loading, success } = this.state;
		return (
			<div>
				<NavContainer />
				<Container>
					{loading && (
						<Message icon>
							<Icon name="circle notched" loading />
							<Message.Header>Fetching Posts...</Message.Header>
						</Message>
					)}

					{!loading && success && <BlogPosts posts={this.props.posts} />}

					{!loading && !success && (
						<Message negative icon>
							<Icon name="warning sign" />
							<Message.Content>
								<Message.Header>Ooops. Something went wrong</Message.Header>
							</Message.Content>
						</Message>
					)}
				</Container>
				<PageFooter />
			</div>
		);
	}
}

BlogPage.propTypes = {
	blog: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
	return {
		posts: state.posts,
	};
}

export default connect(mapStateToProps, { blog })(BlogPage);
