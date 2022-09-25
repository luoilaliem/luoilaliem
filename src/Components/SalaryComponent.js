import React from "react";
import { Card, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { useState } from "react";

const luongCB = 3000000;
const luongGio = 200000;

function RenderSalary({salary,colorSalary}) {
    return (
        <Card>
            <CardTitle className="p-3 bg-white rounded m-2">{salary.name }</CardTitle>
            <CardBody>
                <CardText>Ma nhan vien: {salary.id}</CardText>
                <CardText>He so luong: {salary.salaryScale}</CardText>
                <CardText>So gio lam them: {salary.overtime}</CardText>
                <CardText className="bg-light p-2 shadow">Luong: {(salary.salaryScale*luongCB + salary.overTime*luongGio).toFixed(0)}</CardText>
            </CardBody>
        </Card>
    )
}

const Salary = (props) => {
    const [sortSalary, setSortSalary] = useState(false)

    const salary = props.staffs.sort((a, b) => sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale).map((ss) => {
        return (
            <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
                <RenderSalary salary={ss} />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhan Vien</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bang luong</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <button className="btn btn-danger" onClick={() => setSortSalary(!sortSalary)}>Sap xep thep he so luong</button>
            <div className="row shadow mb-3">
                {salary}
            </div>
        </div>
    );
}
export default Salary;