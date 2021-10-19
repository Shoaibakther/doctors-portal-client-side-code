import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged  } from "firebase/auth";
import firebaseAuthentication from "../Components/Firebase/firebase.init";
firebaseAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
     return signInWithPopup(auth, googleProvider)
           
            
    }
 
    const logOut = () => {
        signOut(auth)
            .then(result => {
            
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [setUser]);
    return {
        user,
        error,
        signInUsingGoogle,
       
        logOut

    }
}
export default useFirebase;