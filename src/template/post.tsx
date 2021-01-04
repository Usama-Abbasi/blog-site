import React from 'react'
import Layout from '..//component/layout';
import Typing from 'react-typing-animation';
export default function Post({pageContext}) {
    const {itemDetails}=pageContext;
    const body=JSON.parse(itemDetails.body.raw).content;
    
    let data=body.map((obj)=>(
        obj.content[0]
    ))
    let finaldata=""
    let result=data.map((obj)=>(
        finaldata=finaldata.concat(obj.value)
    ))
    // console.log("body",body[0].content[0].value)
    // console.log(itemDetails);
    return (
        <Layout>
            <h1>{itemDetails.title}</h1>
            <h4>{itemDetails.publisheddate}</h4>
            <img src={itemDetails.image.fluid.src}/>
            <p style={{fontFamily:'sans-serif',fontSize:'20px'}}><Typing>{finaldata}</Typing></p>
        </Layout>
    )
}
