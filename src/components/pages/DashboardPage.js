import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import NavContainer from "../containers/NavContainer";
import PageFooter from "../footers/PageFooter";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
	<div>
		<NavContainer />
		<Container>{!isConfirmed && <ConfirmEmailMessage />}</Container>
		<PageFooter />
	</div>
);
DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed,
	};
}

export default connect(mapStateToProps)(DashboardPage);
