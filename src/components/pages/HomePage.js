import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

import HeaderContainer from "../containers/HeaderContainer";

const HomePage = () => (
	<HeaderContainer>
		<Segment style={{ padding: "8em 0em" }} vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							We do things differently.
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Our sole purpose is to help you find compelling ideas, knowledge,
							and perspectives. We don’t serve ads—we serve you, the curious
							reader who loves to learn new things. Medium is home to thousands
							of independent voices, and we combine humans and technology to
							find the best reading for you—and filter out the rest.
						</p>
					</Grid.Column>
					<Grid.Column floated="right" width={6}>
						<Image
							bordered
							rounded
							size="large"
							src="/static/images/posts.png"
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="center">
						<Button size="huge">Get Started</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	</HeaderContainer>
);

HomePage.propTypes = {
	fetchAll: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
};

export default HomePage;
