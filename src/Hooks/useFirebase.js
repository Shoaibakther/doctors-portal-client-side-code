import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from "firebase/auth";
import firebaseAuthentication from "../Components/Firebase/firebase.init";
firebaseAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
      const [isLogin, setIsLogin] = useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
     return signInWithPopup(auth, googleProvider)       
    }
      const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }
     const handleEmailChange = e => {
    setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
        }
          if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }
    }
      const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }
 const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        
      })
      .catch(error => {
        setError(error.message);
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
    }, [setUser]);
    return {
        user,
        error,
        email,
        password,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        toggleLogin,
        isLogin,
        registerNewUser,
        logOut

    }
}
export default useFirebase;