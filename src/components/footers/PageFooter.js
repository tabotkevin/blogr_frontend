import React from "react";

import { Container, Grid, Header, Segment } from "semantic-ui-react";

const PageFooter = () => (
	<Segment
		inverted
		vertical
		style={{
			padding: "2em 0em",
			position: "absolute",
			bottom: "0",
			width: "100%",
		}}
	>
		<Container>
			<Grid divided inverted stackable centered>
				<Grid.Row>
					<Grid.Column width={7}>
						<Header as="h4" inverted center>
							Blogr
						</Header>
						<p center>Copyright @ 2020 Blogr, All rights reserved.</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</Segment>
);

export default PageFooter;
