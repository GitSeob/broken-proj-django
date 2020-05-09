import React from 'react';
import PropTypes from 'prop-types';
import {Box, TestInner, Filter, UnderLine} from '../css/styledCss';
import Header from './Header';

const Work = props => {
	return (
		<Box className='work'>
			<Filter className='notFilter'>
				<Header className='work' subTitle='Portfolio' title='My works' />
				<h1>Work</h1>
				<UnderLine className='work'/>
			</Filter>
		</Box>
	);
};

Work.propTypes = {

};

export default Work;
