import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image, Button, Container } from "semantic-ui-react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";

class TopNavigation extends React.Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { logout, user, isAuthenticated } = this.props;
		const { fixed } = this.state;
		// const path = location.pathname;
		//  active={path === "/"}

		return (
			<Menu
				fixed={fixed ? "top" : null}
				inverted={!fixed}
				pointing={!fixed}
				secondary={!fixed}
				size="large"
			>
				<Container>
					<Menu.Item as={Link} to="/" active>
						Home
					</Menu.Item>
					<Menu.Item as={Link} to="/blog">
						Blog
					</Menu.Item>
					<Menu.Item as={Link} to="/dashboard">
						Dashboard
					</Menu.Item>
					<Menu.Item as={Link} to="/posts">
						Posts
					</Menu.Item>
					{isAuthenticated ? (
						<Menu.Menu position="right">
							<Dropdown
								trigger={<Image avatar src={gravatarUrl(user.email)} />}
							>
								<Dropdown.Menu>
									<Dropdown.Item onClick={() => logout()}>
										<i className="user icon" /> Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Menu.Menu>
					) : (
						<Menu.Item position="right">
							<Button as={Link} to="/login" inverted={!fixed}>
								Log in
							</Button>

							<Button
								as={Link}
								to="/signup"
								inverted={!fixed}
								primary={fixed}
								style={{ marginLeft: "0.5em" }}
							>
								Sign Up
							</Button>
						</Menu.Item>
					)}
				</Container>
			</Menu>
		);
	}
}

TopNavigation.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired,
	}).isRequired,
	logout: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		user: state.user,
		isAuthenticated: !!state.user.email,
	};
}

export default connect(mapStateToProps, { logout: actions.logout })(
	TopNavigation
);
