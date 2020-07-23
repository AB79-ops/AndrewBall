import React from "react";
import Headshot from "../images/Headshot-cropped.jpeg"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class MainContent extends React.Component {
    render() {
        return (
            <Container className="mainContent">
                <Row>
                    <img className="blurred-edge" style={{width: "60vw", position: "relative"}} src={Headshot}
                         alt="Headshot"/>
                </Row>
            </Container>
        )
    }
}

export default MainContent;