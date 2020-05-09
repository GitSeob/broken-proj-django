import React from 'react';
import PropTypes from 'prop-types';
import {Box, UnderLine, Filter} from '../css/styledCss';
import Header from './Header';

const Ability = props => {
	return (
		<Box className='ability'>
			<Filter className='ability'>
				<Header subTitle='Ability' title='What can I do' />
				<h1>Ability</h1>
				<UnderLine />
			</Filter>
		</Box>
	);
};

Ability.propTypes = {

};

export default Ability;
