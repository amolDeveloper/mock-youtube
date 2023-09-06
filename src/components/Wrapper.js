import React from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const Wrapper = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              console.log('auth in');
              navigate('/body');
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              console.log('auth out');
              navigate('/');
            }
        })
    }, [])

    return (
        <div></div>
    )
}

export default Wrapper
