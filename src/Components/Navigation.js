import React from "react";
import {Nav, Navbar} from "react-bootstrap";


// const date = new Date();
//
// const styles = {
//     fontSize: 30
// };
//
// let AmPm;
// if (date.getHours() % 12 < 11) {
//     styles.color = "red";
//     AmPm = "PM"
// } else {
//     AmPm = "AM";
//     styles.color = "blue"
// }


class Navigation extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
                    className="nav navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <a className="navbar-brand" href="#">Andrew Ball</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
            </Navbar>

    )
    }
    }

    export default Navigation;