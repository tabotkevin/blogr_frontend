import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PostCard from "../cards/PostCard";
import Empty from "../placeholders/empty";

const PostsList = ({ posts, handleDelete }) => {
	const postsList = (
		<div>
			<div className="ui grid">
				<div className="four column row">
					<div className="right floated column">
						<Link
							className="ui labeled icon primary button large right floated"
							to="post"
						>
							<i className="plus icon" />
							Add Post
						</Link>
					</div>
				</div>
			</div>

			<h4 className="ui horizontal divider header">
				<i className="tag icon" />
				My Posts
			</h4>

			<div className="ui two cards">
				{posts.map((post) => (
					<PostCard post={post} key={post._id} handleDelete={handleDelete} />
				))}
			</div>
		</div>
	);

	return <div>{posts.length === 0 ? <Empty /> : postsList}</div>;
};

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default PostsList;
