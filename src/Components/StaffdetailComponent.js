import React from "react";
import {
    CardImg,
    CardText,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function RenderStaff({ staff }) {
    if (staff != null) {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-3">
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                    </div>
                    <div className="col-9">
                        <CardTitle>Ho va ten: {staff.name}</CardTitle>
                        <CardText>
                            Ngay sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                        </CardText>
                        <CardText>
                            Ngay vao cong ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                        </CardText>
                        <CardText>
                            Phong ban: {staff.department.name || staff.department}
                        </CardText>
                        <CardText>So ngay nghi con lai: {staff.annualLeave}</CardText>
                        <CardText>So ngay da lam them: {staff.overTime}</CardText>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
        
    }
}
const StaffDetail = (props) => {
    if (props.staff != null) {
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/nhanvien">Nhân viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.staff.name}</h3>
                <hr />
              </div>
            </div>
            <div className="row mb-3">
              <RenderStaff staff={props.staff} />
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
}
export default StaffDetail;