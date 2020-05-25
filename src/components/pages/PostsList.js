import React from "react";
import PropTypes from "prop-types";
import PostCard from "../cards/PostCard";

const PostsList = ({ posts, handleDelete }) => {
	const noPosts = <p>You have no posts yet</p>;

	const postsList = (
		<div className="ui four cards">
			{posts.map((post) => (
				<PostCard post={post} key={post._id} handleDelete={handleDelete} />
			))}
		</div>
	);

	return <div>{posts.length === 0 ? noPosts : postsList}</div>;
};

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default PostsList;
