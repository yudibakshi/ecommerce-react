import React, { Component } from 'react';
import CustomButton from '../common/custom-button/custom-button';
import FormInput from '../common/form-input/form-input';

import { signInWithGoogle } from '../../utils/firebase.js'

import './sign-in.scss'

class SignIn extends Component {
	state = { 
		email: '',
		password: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password:'' })
	}

	handleChange = (event) => {
		const { name, value } =  event.currentTarget;
		this.setState({ [name] : value })
	}

	render() { 
		return (  
			<div className="sign-in">
					<h2 className="title">I already have an account</h2>
					<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						label="Email"
						required 
						id="email" 
						name="email" 
						value={this.state.email} 
						onChange={this.handleChange} 
					/>
					<FormInput
						type="password"
						label="Password" 
						required 
						id="password" 
						name="password" 
						value={this.state.password} 
						onChange={this.handleChange} 
					/>
					
					<div className="buttons">
						<CustomButton 
							type="submit">
							Sign in
						</CustomButton>
						
						<CustomButton
							isGoogleSignIn
							onClick={signInWithGoogle} >
							Sign in with Google
						</CustomButton>
					</div>

				</form>
			</div>
		);
	}
}
 
export default SignIn;