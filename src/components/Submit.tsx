// src/components/Submit.tsx
import React, { useState, useEffect } from 'react';
import { Login } from "@/components/Login"
import { Form } from "@/components/Form"
import { firebaseApp } from '../lib/firebase'; // Import the firebaseApp, not auth
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth';

import { Button } from "@/components/ui/button"

export function Submit() {
    const [userLoggedIn, setUserLoggedIn] = useState(false); // State to manage user

    const auth = getAuth(firebaseApp);

    useEffect(() => {
        // Check if user is already logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

const handleLogout = async () => {
    try {
        await signOut(auth);
        setUserLoggedIn(false);
    } catch (error) {
        console.error('Logout error:', error.message);
        // Handle logout error
    }
};

  return (
    <>

      <Form /> 
      <Login />

      {userLoggedIn ? (<><p>User Is Logged In</p> <Button onClick={handleLogout}>Logout</Button></>) : (<p>Logged Out</p>)}

    </>
  );
}

export default Submit;
