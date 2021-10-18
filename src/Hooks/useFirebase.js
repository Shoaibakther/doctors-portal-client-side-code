import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged  } from "firebase/auth";



const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
            setError(error.message)
        })
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
    }, []);
    return {
        user,
        error,
        signInUsingGoogle,
        logOut

    }
}
export default useFirebase;