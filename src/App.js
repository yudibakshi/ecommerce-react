import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

// import HatsPage from './pages/hatspage/hatspage';
import './App.css';

function App() {
  return (
    <React.Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
