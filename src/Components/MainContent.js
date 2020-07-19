import React from "react";
import Headshot from "../images/Headshot-wide.jpeg"

class MainContent extends React.Component{
    render() {
        return(
        <div className="mainContent">
            <img style={{height: "400px", position:"relative", left: "400px"}} src={Headshot} alt="Headshot"/>
        </div>
        )
    }
}

export default MainContent;