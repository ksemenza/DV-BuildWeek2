import React, { Component } from "react"
import PersonalForm from '../personal/PersonalForm'
import PersonalList from '../personal/PersonalList'
// import RelocateForm from  '../relocate/RelocateForm'



class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-cta">
        <h1 className='dashboard-header'>Budget Calculator</h1>

        <div className='form-input-cta'>
        <PersonalForm />
        <PersonalList/>
        {/* <RelocateForm /> */}
        </div>

      </div>
    );
  }
}

export default Dashboard;
