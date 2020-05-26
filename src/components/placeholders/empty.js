import React from "react";
import { Link } from "react-router-dom";

const Empty = () => (
	<div className="ui placeholder segment stackable center aligned page grid">
		<div className="ui icon header">
			<i className="dont icon" />
			No posts are added yet.
		</div>
		<div className=" center aligned page grid">
			<Link className="ui labeled icon primary button small" to="post">
				<i className="plus icon" />
				Add Post
			</Link>
		</div>
	</div>
);

export default Empty;
