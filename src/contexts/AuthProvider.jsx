import React, { useEffect, useState } from "react";
import { AuthContexts } from "./AuthContexts";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
    };
    // Login User
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
    };
    // Google Sign In User
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
    };
	const updateUser = (updateData) => {
		setLoading(true);
		return updateProfile(auth.currentUser, updateData);
	};
    // LogOut
    const logOut = () => {
        return signOut(auth);
    }
    
    // ON Auth State
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

    const allData = {
        user,
        setUser,
		loading,
		setLoading,
		createUser,
		loginUser,
        googleSignIn,
        updateUser,
        logOut,
	};

	return <AuthContexts value={allData}>{children}</AuthContexts>;
};

export default AuthProvider;
