import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardSubtitle
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function StaffList(props) {
    const RenderStaffItem = ({ nv }) => {
        return (
            <Link to={`/nhanvien/${nv.id}`}>
                <Card>
                    <CardImg width="100%" src={nv.image} alt={nv.name} />
                    <CardBody>
                        <CardSubtitle>{nv.name}</CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
        );
    };
    const ListNhanvien = props.staffs.map((nv) => {
        return (
            <div key={nv.id}>
                <div className="col-12 col-md-2" >
                    <img src={nv.image} alt={nv.name} />
                    <NavLink className="nav-link" to={`/nhanvien/${nv.id}`}>
                        <span ></span> { nv.name}
                    </NavLink>
                    {/* <p onClick={Render}>{nv.name }</p> */}
                </div>
            </div>
        );
    });
    return <div className="container">
        <div className="row">
            {ListNhanvien}
        </div>
    </div>;

}

export default StaffList;