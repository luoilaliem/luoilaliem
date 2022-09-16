import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat"; 
class StaffList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            onSelectedStaff: null,
            columnDefault: "col-12 col-md-6 col-lg-4 mt-3"
        };
    }

    onStaffSelect(staff) {
        this.setState({
            onSelectedStaff: staff
        });
    }
    onColumnselect(col) {
        this.setState({
            columnDefault: col
        });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className="col-12">
                    <Card>
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                        <CardBody>
                            <CardTitle>Ho va ten: {staff.name}</CardTitle>
                            <CardText>
                                Ngay sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Ngay vao cong ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                phong ban:{staff.department.name}
                            </CardText>
                            <CardText>
                                So ngay nghi con lai: {staff.annualLeave}
                            </CardText>
                            <CardText>
                                So ngay da lam them: {staff.overtime}
                            </CardText>
                        </CardBody>
                    </Card>
                </div >
            );
        } else {
            return <div></div>;
        }
    }
    render() {
        const staffList = this.props.staffs.map((staff) => {
            return (
                <div className={this.state.columnDefault}>
                    <Card key={staff.id} onClick={()=> this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>
                                {staff.name}
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        }); 
        return (
            <div className="container">
                <div className="row m-3">
                    <button onClick={() => this.onColumnselect("col-md-2 mt-1")} className="btn btn-success mr-3">
                        6 cot
                    </button>
                    <button onClick={() => this.onColumnselect("col-md-3 mt-1")} className="btn btn-success mr-3">
                        4 cot
                    </button>
                    <button onClick={() => this.onColumnselect("col-md-4 mt-1")} className="btn btn-success mr-3">
                        3 cot
                    </button>
                    <button onClick={() => this.onColumnselect("col-md-6 mt-1")} className="btn btn-success mr-3">
                        2 cot
                    </button>
                    <button onClick={() => this.onColumnselect("col-md-12 mt-1")} className="btn btn-success mr-3">
                        1 cot
                    </button>
                </div>
                <div className="row">
                    {staffList}
                </div>
                <div className="row mt-5">
                    {
                        this.renderStaff(this.state.onSelectedStaff)
                    }
                </div>
            </div>
        );
    }
} export default StaffList;