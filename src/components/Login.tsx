// src/components/Login.tsx
import React, { useState, useEffect } from 'react';
// import { useFirebaseApp } from 'reactfire';
import { firebaseApp } from '../lib/firebase'; // Import the firebaseApp, not auth
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { Submit } from './Submit'; // Import your Submit component
import { signOut } from 'firebase/auth';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"


export function Login() {
    // const firebase = useFirebaseApp();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userLoggedIn, setUserLoggedIn] = useState(false); // State to manage user
    const [registrationError, setRegistrationError] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    // const auth = getAuth();
    //   createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //       // Signed up 
    //       const user = userCredential.user;
    //       // ...
    //   })
    //   .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // ..
    //   });

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
  
    const handleRegister = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Registration successful
        const user = auth.currentUser;
        console.log('Registration successful!', user);
        // onSuccess(); // Redirect to /add-link
        setShowSuccessMessage(true);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        if (errorCode === 'auth/email-already-in-use') {
          console.error('Registration error: Email is already in use. Please log in.');
          setRegistrationError('Email is already in use. Please log in using Gmail.');
        } else {
          console.error('Registration error:', errorMessage);
          setRegistrationError('Registration failed. Please try again.');
        }
      }
    };
    
  
  const handleGoogleRegister = async () => {
    try {
      // Create GoogleAuthProvider instance
      const provider = new GoogleAuthProvider();
      
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
  
      // The signed-in user info
      const user = result.user;
      console.log('Google sign-in successful!', user);
    //   onSuccess(); // Redirect to /add-link
      // Show success message
      setShowSuccessMessage(true);
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      // Handle Google sign-in error
    }
  };
  
  const handleForgotPassword = async () => {
    const email = prompt('Enter your email to reset password:');
    
    try {
      await sendPasswordResetEmail(auth, email);
      // Display a success message or redirect the user
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error('Password reset error:', error.message);
      // Handle password reset error
    }
  };

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

    {userLoggedIn ? ( <><Submit/> <Button onClick={handleLogout}>Logout</Button></> ) :( <h1>ANOTHER COMPONENT</h1> )}

        <Dialog>
            <DialogTrigger><a className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">Submit A Link</a></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle className="ml-4">You must be logged in to submit a link</DialogTitle>

                    <DialogDescription>

                    <Tabs defaultValue="account" className="w-full p-4 pb-0">

                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Login</TabsTrigger>
                            <TabsTrigger value="password">Register</TabsTrigger>
                        </TabsList>

                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                    <CardDescription>
                                    Log In to your account here.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-2 px-6">
                                    <div className="space-y-1">
                                        <Label htmlFor="exampleInputEmail1" className="form-label">Email address</Label>
                                            <Input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                                                {registrationError && (
                                                    <div className="alert alert-danger" role="alert">
                                                    {registrationError}
                                                    </div>
                                                )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="exampleInputPassword1" className="form-label">Password</Label>
                                            <Input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />

                                        <div className="w-full text-right">
                                            <a href="#" onClick={handleForgotPassword} style={{fontSize:".75rem"}}>
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex-col items-stretch">

                                    <Button variant="secondary" className="btn btn-outline-primary" type="button" onClick={handleRegister}>
                                        Login with Email
                                    </Button>
                                    {/* <div className="w-full my-2">or</div> */}

                                    {!showSuccessMessage ? (

                                    <Button variant="outline" className="btn btn-outline-primary mt-5" type="button" onClick={handleGoogleRegister}>
                                        <div className="flex items-center google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                                            <svg aria-hidden="true" className="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg> 
                                                <span className="ml-1">Login using Google</span>
                                        </div>
                                    </Button>
                                    ) : (
                                        <div className="mt-4 text-green-300">Successfully signed in!</div>
                                    )}

                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Register</CardTitle>
                                    <CardDescription>
                                    Register for an account here.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-2 px-6">
                                    <div className="space-y-1">
                                        <Label for="exampleInputEmail1" className="form-label">Email address</Label>
                                            <Input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                                                {registrationError && (
                                                    <div className="alert alert-danger" role="alert">
                                                    {registrationError}
                                                    </div>
                                                )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label for="exampleInputPassword1" className="form-label">Password</Label>
                                            <Input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        
                                        <div className="w-full text-right">
                                            <a href="#" onClick={handleForgotPassword} style={{fontSize:".75rem"}}>
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex-col items-stretch">

                                    <Button variant="secondary" className="btn btn-outline-primary" type="button" onClick={handleRegister}>
                                        Register with Email
                                    </Button>

                                {!showSuccessMessage ? (
                                    <Button variant="outline" className="btn btn-outline-primary mt-5" type="button" onClick={handleGoogleRegister}>
                                        <div className="flex items-center google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                                            <svg aria-hidden="true" className="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg> 
                                                <span className="ml-1">Sign up using Google</span>
                                        </div>
                                    </Button>
                                ) : (
                                    <div className="mt-4 text-green-300">Registration successful!</div>
                                )}

                                </CardFooter>
                            </Card>
                        </TabsContent>

                    </Tabs>

                    </DialogDescription>

                    </DialogHeader>
                </DialogContent>
        </Dialog>

    </>
  );
}

export default Login;
