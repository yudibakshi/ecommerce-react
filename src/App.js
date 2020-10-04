import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInPage from './pages/sign-in-page/sign-in-page';

import { auth } from "./utils/firebase";

import './App.css';

class App extends Component {
	state = {
		currentUser:  null
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser : user });
			console.log(user);
		})
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}
	

	render() {
		return (
			<React.Fragment>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
