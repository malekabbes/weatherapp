import React from "react";
const Title = (props) =>{
let dynamic= props.name;
console.log(dynamic)
    return <div>
        <h1 className={dynamic}>{props.title}</h1>
    </div>
};
export default Title;