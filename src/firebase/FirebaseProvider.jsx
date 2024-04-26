import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config'

export const FirebaseContext = createContext(null)


const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading]=useState(true)
  console.log(user);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const updateUser = (name, photoURL) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL:photoURL
    })
  }
  const googleLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const githubLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

  const loginUser = (email, password) => {
    setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
  }
  const logout = () => {
    return signOut(auth)
  }
  useEffect(() => {
    setLoading(true)
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      setLoading(false)
    })
    return () => unSubscribe()
  }, [])

  const allMethod = {
    createUser,
    googleLogin,
    githubLogin,
    loginUser,
    updateUser,
    logout,
    user,
    setUser,
    loading,
    setLoading
}

  return (
    <FirebaseContext.Provider value={allMethod}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider