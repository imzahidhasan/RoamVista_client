import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateCurrentUser, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config'

export const FirebaseContext = createContext(null)


const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user);
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const updateUser = (name,photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL:photoURL
    })
  }
  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }
  const githubLogin = (provider) => {
    return signInWithPopup(auth,provider)
  }

  const loginUser = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password)
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
    return () => unSubscribe()
  }, [])

  const allMethod = {
    createUser,
    googleLogin,
    githubLogin,
    loginUser,
    updateUser
}

  return (
    <FirebaseContext.Provider value={allMethod}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider