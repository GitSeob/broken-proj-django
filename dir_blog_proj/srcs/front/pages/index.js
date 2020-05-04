import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Door from '../components/Door';
import About from '../components/About';
import History from '../components/History';

const Home = props => {
	return (
		<>
			<Door />
			<About />
			<History />
		</>
	);
};

Home.propTypes = {

};

export default Home;
