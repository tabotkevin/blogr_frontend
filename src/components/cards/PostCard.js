import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const PostCard = ({ post, handleDelete }) => {
	return (
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
				<div className="ui two buttons">
					<Link className="ui basic button green" to={`post/${post._id}`}>
						Edit
					</Link>
					<div
						className="ui basic button red"
						onClick={() => handleDelete(post._id)}
					>
						Delete
					</div>
				</div>
			</div>
		</div>
	);
};

PostCard.propTypes = {
	post: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default PostCard;
