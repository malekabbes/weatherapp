import React from "react";
import backimage from "../img/back.png"

const Navbar = ({goback,search}) => {
    return(
 <div style={{ display:"flex",height:"4vw",backgroundColor:"rgba(255, 255, 255, 0.507)"}}>
     <div style={{
         position:"absolute",
         cursor: "pointer",
         left: "5px",
         top:"0",
         }}
         onClick={goback}
         >
           <img
          src={backimage} width='55vw'
          alt="goback"
        />
         </div>
         <div style={{
             position:"absolute",
             left:"40%",
             right:"40%",
         }}
         >
             {search}

         </div>
 </div>
    );
};
export default Navbar;