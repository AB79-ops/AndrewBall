import React from "react";
import {Nav, Navbar} from "react-bootstrap";


const date = new Date();

const styles = {
    fontSize: 30
};

let AmPm;
if (date.getHours() > 11) {
    styles.color = "red";
    AmPm = "PM"
} else {
    AmPm = "AM";
    styles.color = "blue"
}

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });
    }






    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
                    className="nav navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <a className="navbar-brand" href="#">Top Of Page</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"/>
                    <Nav className="mr-auto d-block">
                        <Nav.Item className="navbar-nav mr-auto">
                            {/*<Nav.Link className="nav-item active">*/}
                            {/*    <h1 style={styles}>{this.state.hours + ":" + this.state.minutes + " " + AmPm}</h1>*/}
                            {/*</Nav.Link>*/}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        )
    }
}



export default Navigation;