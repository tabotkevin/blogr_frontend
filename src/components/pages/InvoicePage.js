import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InvoiceForm from "../forms/InvoiceForm";
import { upload } from "../../actions/invoice";

class InvoicePage extends React.Component {
	state = {
		invoice: "",
	};

	submit = (data) =>
		this.props
			.upload(data)
			.then((invoice) => this.setState({ invoice: JSON.stringify(invoice) }));

	render() {
		const { invoice } = this.state;
		return (
			<div>
				<h1>Login page</h1>
				<InvoiceForm submit={this.submit} />
				<br />
				<section>{invoice && <p>{invoice}</p>}</section>
			</div>
		);
	}
}

InvoicePage.propTypes = {
	upload: PropTypes.func.isRequired,
};

export default connect(null, { upload })(InvoicePage);
