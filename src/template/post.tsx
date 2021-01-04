import React from 'react'
import Layout from '..//component/layout';
import Typing from 'react-typing-animation';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
export default function Post({pageContext}) {
    const {itemDetails}=pageContext;
    console.log(itemDetails);
    return (
        <Layout>
            <h1>{itemDetails.title}</h1>
            <h4>{itemDetails.publisheddate}</h4>
            <img src={itemDetails.image.fluid.src}/>
            <p style={{fontFamily:'sans-serif',fontSize:'20px'}}><Typing>{documentToReactComponents(itemDetails.body.json)}</Typing></p>
        </Layout>
    )
}
