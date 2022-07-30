import React from "react";
const Scroll =(props) =>{
    return(
    // console.log(props)
    // return props.children
    // return <h1>hi</h1>
    //css:overflow-y
    // jsx:overflowY
    // you must camelCalse for JSX
    <div style={{overflowY:'scroll' ,border:'5px solid black',height:'800px'}}> 
    {/*  with double prackets use jsx and single use html and here using html  */}
        {props.children}
    </div>)
    
};
export default Scroll;