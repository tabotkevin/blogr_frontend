import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";

const TopNavigation = ({ user, logout }) => (
	<Menu tabular>
		<Menu.Item as={Link} to="/dashboard" active="true">
			<i className="home icon" /> Dashboard
		</Menu.Item>

		<Menu.Item as={Link} to="/posts">
			<i className="tag icon" /> Posts
		</Menu.Item>

		<Menu.Menu position="right">
			<Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => logout()}>
						<i className="user icon" /> Logout
					</Dropdown.Item>
					<Menu.Item as={Link} to="#">
						<i className="mail icon" /> Account
					</Menu.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Menu>
	</Menu>
);

TopNavigation.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired,
	}).isRequired,
	logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, { logout: actions.logout })(
	TopNavigation
);
