import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Door from '../components/Door';
import About from '../components/About';
import Ability from '../components/Ability';
import Pr from '../components/Pr';
import Work from '../components/Work';
import Footer from '../components/Footer';


const Home = props => {
	return (
		<>
			<Door />
			<About />
			<Ability />
			{/* <Pr /> */}
			<Work />
			<Footer />
		</>
	);
};

Home.propTypes = {

};

export default Home;
