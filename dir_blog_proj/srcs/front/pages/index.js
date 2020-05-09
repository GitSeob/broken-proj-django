import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Door from '../containers/Door';
import About from '../containers/About';
import Ability from '../containers/Ability';
import Work from '../containers/Work';
import Footer from '../containers/Footer';


const Home = props => {
	return (
		<>
			<Door />
			<About />
			<Ability />
			<Work />
			<Footer />
		</>
	);
};

Home.propTypes = {

};

export default Home;
