import React from "react";
import Headshot from "../images/Headshot-cropped.jpeg"

class MainContent extends React.Component{
    render() {
        return(
        <div className="mainContent">
            <img className="blurred-edge" style={{width: "50vw", position:"relative"}} src={Headshot} alt="Headshot"/>
        </div>
        )
    }
}

export default MainContent;