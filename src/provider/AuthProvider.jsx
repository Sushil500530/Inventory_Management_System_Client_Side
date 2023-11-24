/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const createUser = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    
    const loginUser = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
     
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logoutUser = () => {
        setIsLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    res.data
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setIsLoading(false)
                    }
                })
            }
            else{
                // do something(remove token)
                localStorage.removeItem('access-token')
                setIsLoading(false)
            }
            console.log('current user is ---->', currentUser);
        })
        return () => {
            unSubscriber()
        }
    },[axiosPublic])

    const authInfo = {
        user,
        isLoading,
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