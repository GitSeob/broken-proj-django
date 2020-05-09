import React from 'react';
import styled from 'styled-components';
import {H1} from '../css/styledCss';
import PropTypes from 'prop-types';

const Port = props => {
	return (
		<ProjCont>
			<H1>PROJ COMPONENT</H1>
		</ProjCont>
	);
};

Port.propTypes = {

};

const ProjCont = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #FFFFFF;
	color: #000;
`;

export default Port;
