/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext("");

//google adn github provider 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // signInWithPopup google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Observer User logging or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                // console.log(loggedUser);
                setUser(loggedUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [])


    // update profile
    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            // Profile updated!
            // ...
            console.log("Profile updated!");
        }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
        });
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        loading,
        setLoading,
        success,
        setSuccess,
        errorMessage,
        setErrorMessage,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;