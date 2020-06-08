import React from "react";
import PropTypes from "prop-types";
import { Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const BlogPosts = ({ posts }) => {
	const postsList = (
		<div>
			<h1 className="ui horizontal divider header">
				<i className="tag icon" />
				The Blog
			</h1>

			<div className="ui two cards">
				{posts.map((post) => (
					<div className="ui card">
						<div className="image">
							<img
								src={`http://localhost:8080/uploads/${post.image}`}
								alt="Post cover"
							/>
						</div>
						<div className="content">
							<div className="header">{post.title}</div>
							<div className="meta">
								<Moment date={post.createdAt} />
							</div>
							<div className="description">{post.body}</div>
						</div>
						<div className="extra content">
							<Button as={Link} to={`post/${post._id}`} size="large">
								Read More
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	const Empty = () => (
		<Message info>
			<Message.Header>There are no blog posts at the moment..</Message.Header>
		</Message>
	);

	return <div>{posts.length === 0 ? <Empty /> : postsList}</div>;
};

BlogPosts.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default BlogPosts;
