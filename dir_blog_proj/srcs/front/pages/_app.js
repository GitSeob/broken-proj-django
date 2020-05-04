import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import App, {Container} from 'next/app'
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Home = ({ Component }) => {
	return (
		<>
			<Helmet
				title='anjoy blog'
				htmlAttributes={{lang: 'ko'}}
				meta={[{
					charSet: 'UTF-8',
				},{
					name: 'viewport',
					content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
				}]}
				link={[{
					rel: 'stylesheet', href: '../styleSheet.css'
				},{
					rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
				}]}
				script={[{
					src: '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js'
				},{
					src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'
				}]}
			/>
			<body style={Body}>
				<AppLayout>
					<Component />
				</AppLayout>
			</body>
		</>
	);
};

const Body = {
	position: 'relative',
	minHeight: '100%',
	height: '100%',
	minWidth: '360px',
	overflowY: 'auto',
	color: '#141414',
	testAlign: 'center',
	margin: 0,
	padding: 0,
	fontWeight: 400,
	lineHeight: 1.5,
};

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default Home;
