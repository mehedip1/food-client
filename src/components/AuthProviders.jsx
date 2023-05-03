import { createContext } from 'react';
import app from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProviders = ({Children}) => {
    const user = null;

    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)

    }

    const authInfo ={
        user,
        createUser,
        signIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
           {Children}
        </AuthContext.Provider>

            
        
    );
};

export default AuthProviders;