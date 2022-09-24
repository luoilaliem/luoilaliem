import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    NavItem,
    Collapse
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md" color="success" className="shadow mb-3">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto">
                            <img src="/assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/staff">
                                        <span className="fa fa-users fa-lg"></span> Nhan Vien
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/department">
                                        <span className="fa fa-id-card-o fa-lg"></span> Phong Ban
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/salary">
                                        <span className="fa fa-money fa-lg"></span> Bang Luong
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header;