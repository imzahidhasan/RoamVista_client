import { signInWithPopup } from 'firebase/auth'
import React, { createContext } from 'react'
import auth from './firebase.config'

export const FirebaseContext = createContext(null)


const FirebaseProvider = ({ children }) => {

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }
  const githubLogin = (provider) => {
    return signInWithPopup(auth,provider)
  }




  const allMethod = {
    googleLogin,
    githubLogin
}

  return (
    <FirebaseContext.Provider value={allMethod}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider