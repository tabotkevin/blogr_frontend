import React from "react";
import PropTypes from "prop-types";
import { Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Empty from "../placeholders/empty";

const BlogPosts = ({ posts }) => {
	const postsList = (
		<div>
			<h1 className="ui horizontal divider header">
				<i className="tag icon" />
				The Blog
			</h1>

			{posts.map((post) => (
				<div>
					<div className="image">
						<img
							src={`http://localhost:8080/uploads/${post.image}`}
							alt="Post cover"
						/>
					</div>
					<Header as="h3" style={{ fontSize: "2em" }}>
						{post.title}
					</Header>
					<p style={{ fontSize: "1.33em" }}>{post.body}</p>
					<Button as={Link} to={`post/${post._id}`} size="large">
						Read More
					</Button>
				</div>
			))}
		</div>
	);

	return <div>{posts.length === 0 ? <Empty /> : postsList}</div>;
};

BlogPosts.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default BlogPosts;
