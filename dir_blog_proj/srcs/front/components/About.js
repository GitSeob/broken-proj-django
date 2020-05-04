import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const About = props => {
	return (
		<Box>
			<TestInner>
				<h1>About</h1>
			</TestInner>
		</Box>
	);
};

About.propTypes = {

};

const Box = styled.div`
	position: relative;
	background-color: rgb(255, 188, 126, 0.2);
`;


const TestInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default About;
