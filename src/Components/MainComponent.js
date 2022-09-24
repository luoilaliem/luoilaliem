import React, { Component } from "react";
import Footer from "./footerComponent";
import { STAFFS, DEPARTMENTS } from "../share/staffs";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
        };
    }
    render() {
        return (
            <div>
                <Footer/>
            </div>
        )
    }
}
export default Main;