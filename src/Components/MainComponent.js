import React, { useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./footerComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffdetailComponent";
import Salary from "./SalaryComponent";
import Department from "./Department";
import { STAFFS, DEPARTMENTS } from "../share/staffs";
import { Route, Switch,  } from "react-router-dom";


function Main() {
    const [nhanvien, setNhanvien] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS
    });

    const StaffWithId = ({ match }) => {
        return (
            <StaffDetail
                nv={
                    nhanvien.staffs.filter(
                        (staff) => staff.id === parseInt(match.params.nhanvienId, 10)
                    )[0]
                }
            />
        );
    };
    // const addStaff = (staff) => {
    //     const id = Math.floor(Math.random() * 10000 + 1);
    //     const newStaff = { id, ...staff };
    //     this.setState({
    //       staffs: [...this.state.staffs, newStaff],
    //     });
    //     console.log(newStaff);
    //     console.log(nhanvien.staffs);
    //   };
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
               
                <Route
                    path='/nhanvien'
                    component={() => <StaffList  staffs={nhanvien.staffs} />}>
                </Route>
                <Route
                    path="/salary"
                    component={() => <Salary staffs={nhanvien.staffs} />}
                />
                <Route
                    path="/bophan"
                    component={() =>(<Department departments={nhanvien.departments} />)}
                />
                
            </Switch>
            <Footer />
        </div>
    )
}
export default Main;