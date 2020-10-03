import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage';
import HatsPage from './pages/hatspage/hatspage';
import './App.css';

function App() {
  return (
    <>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop/hats" component={HatsPage} />
			</Switch>
		</>
	);
}

export default App;
