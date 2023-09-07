import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Wrapper from './Wrapper';
import Header from './Header';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, toggleSignIn] = useState(true);
    const [message, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             const {uid, email, displayName, photoURL} = user;
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
    //           dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
    //           // ...
    //         } else {
    //           // User is signed out
    //           // ...
    //           dispatch(removeUser());
    //         }
    //     })
    // }, [])

    const handleButtonClick = ()=> {
        //Validate Form Data
        const message = checkValidateData(email.current?.value, password.current?.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignIn) {
            //Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/49813362?v=4"
                    }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                    }).catch((error) => {
                        setErrorMessage(error?.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ': ' + errorMessage);
            });

        } else {
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ': ' + errorMessage);
            });

        }

    }

    return (
        <>  
            <Wrapper />
            <Header />
            <div className='lg:w-4/6 lg:mx-auto my-4 sm:w-fit sm:mx-5'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='w-full sm:p-2 lg:p-20 border-2 border-gray-200 bg-gray-200 rounded-3xl'>
                        <p className='w-4/6 mx-auto mb-4 font-bold text-3xl '>{isSignIn ? 'Sign In' : 'Sign Up'}</p>
                        {!isSignIn && <div className='w-4/6 my-2 mx-auto'>
                            <input 
                                ref={name}
                                className='w-full border text-black border-gray-200 rounded-lg p-4' 
                                type='text' 
                                placeholder='Full Name'
                            />
                        </div>}
                        <div className='lg:w-4/6 lg:my-2 lg:mx-auto sm:w-[90%] sm:mx-2 sm:my-4'>
                            <input 
                                ref={email}
                                className='w-full border text-black border-gray-200 rounded-lg p-4' 
                                type='email' 
                                placeholder='Email Address'
                            />
                        </div>
                        <div className='lg:w-4/6 lg:my-2 lg:mx-auto sm:w-[90%] sm:mx-2 sm:my-4'>
                            <input 
                                ref={password}
                                className='w-full border text-black border-gray-200 rounded-lg p-4' 
                                type='password' 
                                placeholder='Password'
                            />
                        </div>
                        <div className='w-4/6 my-2 mx-auto'>
                            <p className='font-bold p-2 m-2 text-red-600'>{message}</p>
                        </div>
                        <div className='w-3/6 my-2 flex flex-col mx-auto'>
                            <button 
                                className='w-32 p-2 mx-auto my-2 bg-blue-300 rounded-md'
                                onClick={handleButtonClick}
                                >{isSignIn ? 'Sign In' : 'Sign Up'}
                            </button>
                            <span 
                                className='p-2 mx-auto cursor-pointer my-2'
                                onClick={() => toggleSignIn(!isSignIn)}
                                >{!isSignIn ? 'Already a User? Sign In Now' : 'New to Youtube? Sign Up now'}
                            </span>
                        </div>
                        <div className='text-red-500 font-bold w-4/6 mx-auto'>
                            <p>Password must contain Uppercase, Lowercase, Special character and numeric</p>
                            <p>Password length should be of atleast 8 characters</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
  )
}

export default Login
