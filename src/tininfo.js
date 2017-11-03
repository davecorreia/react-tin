import React, { Component } from "react";
import OrgItem from "./orgitem";

export default class TinInfo extends Component {

  getOrgs() {
    return this.props.orgs.map(org => {
      return (
        <OrgItem
          orgName={org.orgName}
          ID={org.ID}
          key={org.ID}
        />
      );
    });
  }

  render() {
    let orgs = this.getOrgs();
    return (
      <div className='col-md-12' style={{ border: '1px red' }}>
        <div className="row">
          <div className="col-md-3">
            <p>Org Name</p>
          </div>
          <div className="col-md-3">
            <p style={{ textAlign: 'left' }}>ID</p>
          </div>
        </div>
        {orgs}
        <div className="row">
          <div className="col-md-3">
            <label>TIN: {this.props.FEIN}</label>
            <input className='tin_button' type='button' value='delete' style={{ color: 'red' }} onClick={this.props.cb} />
          </div>
          <div className='row'>
            <div className='col-md-3'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
