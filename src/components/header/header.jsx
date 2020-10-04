import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo/crown.svg'

import { auth } from '../../utils/firebase';

import './header.scss';

const Header = ({ currentUser }) => {
	return ( 
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo"/>
			</Link>
			<div className="options">
				<Link to="/shop" className="option">SHOP</Link>
				<Link to="/contact" className="option">CONTACT</Link>
				{/* <Link to="/signin" className="option">
					{currentUser ? 'SIGN OUT' : 'SIGN IN'}
				</Link> */}
				{
					currentUser ? 
					<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
					<Link className="option" to="/signin">SIGN IN</Link>
				}
			</div>
		</div>
	);
}
 
export default Header;