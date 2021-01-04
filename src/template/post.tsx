import React from 'react'
import Layout from '..//component/layout';
import Typing from 'react-typing-animation';
import firebase from "gatsby-plugin-firebase"
import { useSelector } from "react-redux"
import { store, setLoggedIn } from "../redux/store"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
export default function Post({ pageContext }) {
    const loggedIn = useSelector(state => state.login)
    const Login = async () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        await firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) { })
            .catch(function (error) {
                var errorMessage = error.message
                return errorMessage
            })
        store.dispatch(setLoggedIn(true))
    }

    const { itemDetails } = pageContext;
    console.log(itemDetails);
    return (
        <Layout>
            <h1>{itemDetails.title}</h1>
            <h4>{itemDetails.publisheddate}</h4>
            <img src={itemDetails.image.fluid.src} />
            {loggedIn ?
                <>
                    <p style={{ fontFamily: 'sans-serif', fontSize: '20px' }}><Typing speed={50}>{documentToReactComponents(itemDetails.body.json)}</Typing></p>
                </>
                : <>
                    <h3 style={{ color: "red" }}>
                        First you need to login to read this article
                  </h3>
                </>}

        </Layout>
    )
}
