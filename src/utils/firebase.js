import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyA3tqKPtVRjaNJDzXK4k4RxY3zUWarjG10",
	authDomain: "ecommerce-react-24099.firebaseapp.com",
	databaseURL: "https://ecommerce-react-24099.firebaseio.com",
	projectId: "ecommerce-react-24099",
	storageBucket: "ecommerce-react-24099.appspot.com",
	messagingSenderId: "558022838476",
	appId: "1:558022838476:web:c2664ea640dede17c59a69",
	measurementId: "G-GR07SV0SKX"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // Authentication

export const firestore = firebase.firestore(); // Database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get()

	if(!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email, 
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.mesage)
		}
	}
	return userRef;
}

export default firebase;