import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const History = props => {
	return (
		<Box>
			<TestInner>
				<h1>
					History
				</h1>
			</TestInner>
		</Box>
	);
};

History.propTypes = {

};

const Box = styled.div`
	position: relative;
	background-color: #fff;
`;

const TestInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default History;
