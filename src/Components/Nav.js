import React from "react";
import {Navbar}from "react-bootstrap";


const date = new Date();

const styles = {
    fontSize: 30
};

let AmPm;
if (date.getHours() % 12 < 11) {
    styles.color = "red";
    AmPm = "PM"
} else {
    AmPm = "AM";
    styles.color = "blue"
}


class Nav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">Andrew Ball</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Top Of Page<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <h1 style={styles}>{`${date.getHours() % 12 }:${('0' + date.getMinutes()).slice(-2)} ${AmPm}`}</h1>
                </div>
            </Navbar>
            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link href="#features">Features</Nav.Link>
            //             <Nav.Link href="#pricing">Pricing</Nav.Link>
            //         </Nav>
            //         <Nav>
            //             <Nav.Link href="#deets">More deets</Nav.Link>
            //             <Nav.Link eventKey={2} href="#memes">
            //                 Dank memes
            //             </Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        )
    }
}

export default Nav;