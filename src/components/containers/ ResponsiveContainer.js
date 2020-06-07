import PropTypes from "prop-types";
import React from "react";

import DesktopContainer from "../containers/DesktopContainer";
import MobileContainer from "../containers/MobileContainer";
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};

export default ResponsiveContainer;
