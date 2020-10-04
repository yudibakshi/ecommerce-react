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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;