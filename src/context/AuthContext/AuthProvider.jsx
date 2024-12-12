import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        setError(null)
        return createUserWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setError(error.messsage);
        })  
    }

    const signInUser = (email, password) => {
        setLoading(true);
        setError(null);
        return signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setError(error.messsage)
        })

    }

    const signOutUser = () => {
        setLoading(true);
        setError(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('added new user: ', currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        error,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;