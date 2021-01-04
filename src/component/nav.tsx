import React, { useState } from 'react';
import { Link } from 'gatsby';
import style from './nav.module.css';
import Button from "@material-ui/core/Button"
import firebase from 'gatsby-plugin-firebase';
import { useSelector } from 'react-redux';
import { store, setLoggedIn } from '..//redux/store';
export default function Navbar() {
    const loggedIn = useSelector(state => state.login);
    const Login = async () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        await firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) { console.log(result)})
            .catch(function (error) {
                var errorMessage = error.message
                return errorMessage
            })
        store.dispatch(setLoggedIn(true));
    }
    const Logout = async () => {
        await firebase
            .auth()
            .signOut()
            .then(function () {
                return (
                    <div>
                        <h3 style={{ color: "green" }}>Sign out Successfylly</h3>
                    </div>
                )
            })
            .catch(function (error) {
                var errorMessage = error.message
                return errorMessage
            })
            store.dispatch(setLoggedIn(false))
    }
    return <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blogs</Link>
        <Button style={{color:'white',right:'0px'}}
            variant="outlined"
            onClick={loggedIn ? () => Logout() : () => Login()}
        >
            <strong>{loggedIn ? "Logout" : "Login"}</strong>
        </Button>
    </div>
}