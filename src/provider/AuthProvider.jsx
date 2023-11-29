/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
     
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            if(currentUser){

                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    res.data
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            console.log('current user is ---->', currentUser);
        })
        return () => {
            unSubscriber()
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleSignIn,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;