/** @format */

// Modules
import React from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';

// CSS
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faHome,
	faAddressCard,
	faProjectDiagram,
	faComments,
} from '@fortawesome/free-solid-svg-icons';

// Components
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Twitch from './Components/Pages/Projects/Twitch';
import Capstonia from './Components/Pages/Projects/Capstonia';
import Calculator from './Components/Pages/Projects/Calculator';
import Sports from './Components/Pages/Projects/Sports';
import Weather from './Components/Pages/Projects/Weather';

library.add(fab, faHome, faAddressCard, faProjectDiagram, faComments);

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='App' style={style.app}>
					<Header />
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/projects' component={Projects} />
					<Route path='/contact' component={Contact} />
					<Route path='/twitch' component={Twitch} />
					<Route path='/capstonia' component={Capstonia} />
					<Route path='/calculator' component={Calculator} />
					<Route path='/sports' component={Sports} />
					<Route path='/weather' component={Weather} />
					<Footer />
				</div>
			</Router>
		);
	}
}

const style = {
	app: {
		width: '90vw',
		height: '100vh',
		display: 'grid',
		gridTemplateRows: '8vh 1fr 8vh',
		alignItems: 'center',
	},
};

export default App;
