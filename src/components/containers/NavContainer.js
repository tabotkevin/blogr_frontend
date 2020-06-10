import PropTypes from "prop-types";
import React, { Component } from "react";

import { Responsive, Segment, Visibility } from "semantic-ui-react";

import TopNavigation from "../navigation/TopNavigation";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class NavContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;

		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment inverted textAlign="center" vertical>
						<TopNavigation />
					</Segment>
				</Visibility>
				<div style={{ marginTop: "40px" }}>{children}</div>
			</Responsive>
		);
	}
}

NavContainer.propTypes = {
	children: PropTypes.node,
};

export default NavContainer;
