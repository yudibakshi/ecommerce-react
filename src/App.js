import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInPage from './pages/sign-in-page/sign-in-page';

import { auth, createUserProfileDocument } from "./utils/firebase";

import './App.css';

class App extends Component {
	state = {
		currentUser:  null
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			if(userAuth) {
				const userRef = createUserProfileDocument(userAuth);

				(await userRef).onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					})
				});
			} else {
				this.setState({ currentUser : userAuth }); //userAuth === null
			}
		});
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
