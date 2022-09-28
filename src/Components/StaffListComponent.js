import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    Button,
    Modal,
    Col,
    Input,
    ModalHeader,
    ModalBody,
    Row,
    Label,
    FormFeedback
} from "reactstrap";
import { Control, LocalForm, Errors, Field } from "react-redux-form";
import { Link } from "react-router-dom";

const RenderStaffItem = ({ staff }) => {
    return (
        <Link to={`/staff/${staff.id}`}>
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardBody>
                    <CardSubtitle>{staff.name}</CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    );
};
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameF: "",
            modalOpen: false,
            doB: "",
            touched: {
                doB: false,
                startDate: false
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.timNhanvien = this.timNhanvien.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    timNhanvien(event) {
        const nameS = event.target.nameS.value;
        event.preventDefault();
        this.setState({ nameF: nameS });
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = event.value;
        const name = event.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = () => {
        const newStaff = {
            name: this.state.name,
            department: this.state.department,
            salaryScale: this.state.salaryScale,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            doB: this.state.doB,
            startDate: this.state.startDate,
            image: this.state.image
        };
        this.props.onAdd(newStaff);
    };
    validate(
        name, department, salaryScale, doB, startDate, annualLeave, overTime
    ) {
        const errors = {
            name: "",
            department: "",
            salaryScale: "",
            doB: "",
            startDate: "",
            annualLeave: "",
            overTime: ""
        };
        if (this.state.touched.name && name.length < 3)
            errors.name = " nhap nhieu hon 3 ky tu";
        else if (this.state.touched.name && name.length > 50)
            errors.name = " nhap it hon 50 ky tu";
        if (this.state.touched.department && department.length < 1)
            errors.department = " yeu cau nhap";
        if (this.state.touched.salaryScale && salaryScale.length < 1)
            errors.salaryScale = " yeu cau nhap";
        if (this.state.touched.annualLeave && annualLeave.length < 1)
            errors.annualLeave = " yeu cau nhap";
        if (this.state.touched.overTime && overTime.length < 1)
            errors.overTime = " yeu cau nhap";
            if (this.state.touched.doB && doB.length < 1)
            errors.overTime = " yeu cau nhap";
            if (this.state.touched.startDate && startDate.length < 1)
                errors.startDate = " yeu cau nhap";
        return errors;
    }
    render() {
        const errors = this.validate(
            this.state.name,
            this.state.department,
            this.state.salaryScale,
            this.state.annualLeave,
            this.state.overTime,
            this.state.doB,
            this.state.startDate); // Tạo biến báo lỗi khi người dùng khai báo thiếu
        const staffList = this.props.staffs
            .filter((val) => {
                if (this.state.nameF === "") return val;
                else if (
                    val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
                )
                    return val;
                return 0;
            })
            .map((val) => {
                return (
                    <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={val.id}>
                        <RenderStaffItem staff={val} />
                    </div>
                );
            });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <div className="row">
                            <div className="col-10 col-md-10">
                                <h3>Nhân viên</h3>
                            </div>
                            <div className="col-2 col-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-plus fa-lg"></span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <form onSubmit={this.timNhanvien} className="form-group row">
                            <div className="col-8 col-md-8">
                                <input
                                    type="text"
                                    name="nameS"
                                    className="form-control"
                                    placeholder="Tìm kiếm nhân viên ..."
                                />
                            </div>
                            <div className="col-4 col-md-4">
                                <button className="btn btn-success" type="submit">
                                    Tìm kiếm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffList;