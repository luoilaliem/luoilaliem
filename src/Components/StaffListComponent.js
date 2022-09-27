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
import { Control, LocalForm, Errors } from "react-redux-form";
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
    validate(doB, startDate) {
        const errors = {
          doB: "",
          startDate: ""
        };
    
        if (this.state.touched.doB && doB.length < 1) errors.doB = "Yêu cầu nhập";
        if (this.state.touched.startDate && startDate.length < 1)
          errors.startDate = "Yêu cầu nhập";
    
        return errors;
      }
    render() {
        const errors = this.validate(this.state.doB, this.state.startDate); // Tạo biến báo lỗi khi người dùng khai báo thiếu
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