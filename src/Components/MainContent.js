import React from "react";
import Headshot from "../images/Headshot-cropped.jpeg"
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'


class MainContent extends React.Component {
    render() {
        return (
            <div className="mainContent">
                    <img className="blurred-edge" width="60%" height="100%" style={{width: "60vw", position: "relative"}} src={Headshot}
                         alt="Headshot"/>
            </div>
        )
    }
}

export default MainContent;