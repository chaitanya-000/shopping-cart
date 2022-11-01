import React from 'react';
import './App.css';
import About from './Components/About/About';
import Home from './Components/home/Home';
import NavBar from './Components/Navbar/NavBar';
import Store from './Components/Store/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/store'
						element={<Store />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
