import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
	<Container>{!isConfirmed && <ConfirmEmailMessage />}</Container>
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
