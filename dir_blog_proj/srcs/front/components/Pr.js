import React from 'react';
import PropTypes from 'prop-types';
import {Box, TestInner, Fillter, Filter} from '../css/styledCss';

const Pr = props => {
	return (
		<Box className='pr'>
			<Filter>
				<TestInner>
					<h1>Pr</h1>
				</TestInner>
			</Filter>
		</Box>
	);
};

Pr.propTypes = {

};

export default Pr;
