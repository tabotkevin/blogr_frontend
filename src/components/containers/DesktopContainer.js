import PropTypes from "prop-types";
import React, { Component } from "react";

import { Responsive, Segment, Visibility } from "semantic-ui-react";

import HomepageHeading from "../headers/HomepageHeading";
import TopNavigation from "../navigation/TopNavigation";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class DesktopContainer extends Component {
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
					<Segment
						inverted
						textAlign="center"
						style={{
							minHeight: 700,
							padding: "1em 0em",
							backgroundImage: "url('/static/images/background.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						vertical
					>
						<TopNavigation />
						<HomepageHeading />
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
};

export default DesktopContainer;
