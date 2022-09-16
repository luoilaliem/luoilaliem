import React, { Component } from 'react';
import './App.css';
import StaffList from './components/StaffListComponent';
import { BrowserRouter } from 'react-router-dom';
import { STAFFS } from './share/staffs';
import { DEPARTMENTS } from './share/staffs';
import { ROLE } from './share/staffs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs : STAFFS,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <StaffList staffs={this.state.staffs } />
        </div>
      </BrowserRouter>
    );
  }
}
//c1
export default App;