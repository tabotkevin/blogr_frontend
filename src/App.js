import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Loader from "react-loader";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import BlogPage from "./components/pages/BlogPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import PostPage from "./components/pages/PostPage";
import PostsPage from "./components/pages/PostsPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import NavContainer from "./components/containers/NavContainer";
import HomePageFooter from "./components/footers/HomePageFooter";
import { fetchCurrentUser } from "./actions/users";

class App extends React.Component {
	componentDidMount() {
		if (this.props.isAuthenticated) {
			this.props.fetchCurrentUser();
		}
	}

	render() {
		const { location, loaded, isAuthenticated } = this.props;
		const isHome = location.pathname === "/";
		return (
			<div>
				<Loader loaded={loaded}>
					{(isAuthenticated || isHome) && <NavContainer />}
					<Route location={location} path="/" exact component={HomePage} />
					<Route
						location={location}
						path="/confirmation/:token"
						exact
						component={ConfirmationPage}
					/>
					<GuestRoute
						location={location}
						path="/login"
						exact
						component={LoginPage}
					/>
					<GuestRoute
						location={location}
						path="/signup"
						exact
						component={SignupPage}
					/>
					<GuestRoute
						location={location}
						path="/forgot_password"
						exact
						component={ForgotPasswordPage}
					/>
					<GuestRoute
						location={location}
						path="/reset_password/:token"
						exact
						component={ResetPasswordPage}
					/>
					<UserRoute
						location={location}
						path="/dashboard"
						exact
						component={DashboardPage}
					/>
					<UserRoute
						location={location}
						path="/posts"
						exact
						component={PostsPage}
					/>
					<UserRoute
						location={location}
						path="/blog"
						exact
						component={BlogPage}
					/>
					<UserRoute
						location={location}
						path="/post"
						exact
						component={PostPage}
					/>
					<UserRoute
						location={location}
						path="/post/:_id"
						exact
						component={PostPage}
					/>
					{(isAuthenticated || isHome) && <HomePageFooter />}
				</Loader>
			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	fetchCurrentUser: PropTypes.func.isRequired,
	loaded: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.email,
		loaded: true,
		// loaded: !!state.user.loaded,
	};
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);
