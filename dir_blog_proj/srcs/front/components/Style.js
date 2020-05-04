import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Style = props => {
	return (
		<Logo>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 767.83 198" style={{enableBackground:'new 0 0 767.83 198'}}>
				<g>
					<defs>
						<rect id="SVGID_1_" x="-94.17" y="-144" width="959.76" height="540"/>
					</defs>
					<clipPath id="SVGID_2_">
						<use href="#SVGID_1_"  style={{overflow:'visible'}} />
					</clipPath>
					<rect x="-94.17" y="-144" className="st0" width="959.76" height="540"/>
				</g>
				<rect x="-94.17" y="-144" className="st1" width="960" height="540"/>
				<text transform="matrix(1 0 0 1 6.7686 192.7197)"><tspan x="0" y="0" className="st2 st3">ANJ</tspan><tspan x="450.59" y="0" className="st2 st3 st4">O</tspan><tspan x="609.99" y="0" className="st2 st3">Y</tspan></text>
				<text transform="matrix(1 0 0 1 0 41.7598)" className="st5 st2 st6">one who tries cannot</text>
				<text transform="matrix(1 0 0 1 660.25 41.7598)" className="st5 st2 st6">win</text>
			</svg>
		</Logo>
	);
};

const Logo = styled.div`
	width: 600px;
	height: 300px;
	background-color: red;
	& rect {
		&.st0{clip-path:url(#SVGID_2_);fill:#FFFFFF;}
		&.st1{opacity:0;fill:#FFFFFF;}
		&.st2{font-family:'Days';}
		&.st3{font-size:200px;}
		&.st4{letter-spacing:-9;}
		&.st5{fill:#2E75B6;}
		&.st6{font-size:56px;}
	}
`;

Style.propTypes = {

};

export default Style;
