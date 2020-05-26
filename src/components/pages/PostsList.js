import React from "react";
import PropTypes from "prop-types";
import PostCard from "../cards/PostCard";
import Empty from "../placeholders/empty";

const PostsList = ({ posts, handleDelete }) => {
	const postsList = (
		<div className="ui three cards">
			{posts.map((post) => (
				<PostCard post={post} key={post._id} handleDelete={handleDelete} />
			))}
		</div>
	);

	return <div>{posts.length === 0 ? <Empty /> : postsList}</div>;
};

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default PostsList;
