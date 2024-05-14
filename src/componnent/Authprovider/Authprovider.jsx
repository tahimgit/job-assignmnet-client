import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadding, setLoadding] = useState(true)

    const createUser = (email, password, photoURL, displayName)=>{
        setLoadding(true);
        return createUserWithEmailAndPassword(auth, email,  password, photoURL, displayName)
    };

    const udpateUser = (displayName, photoURL,email) => {
        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
          }).then((profile) => {
            setUser({displayName: displayName,email: email})
            return profile
          }).catch((error) => {
            // An error occurred
            // ...
            return error
          });
    }
    const getUser = () => {
        const users = auth.currentUser;
        setUser(users)
    }
    const singIn = (email, password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        setLoadding(true)
        return signInWithPopup(auth, googleProvider)
    }; 

    const handleGithubeSign=()=>{
        setLoadding(true)
        return signInWithPopup(auth, githubProvider)
    };

    const logOut = ()=>{
        setLoadding(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const clear = onAuthStateChanged(auth, currentUser =>{
             console.log(currentUser);
             setUser(currentUser)
             setLoadding(false);
             
         })
         // clear state 
         return () =>{
             clear()
         }
     },[])

    const userInfo ={
        user,
        loadding,
        udpateUser,
        createUser,
        singIn,
        signInWithGoogle,
        handleGithubeSign,
        logOut,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;