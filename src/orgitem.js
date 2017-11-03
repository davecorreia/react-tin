import React, { Component } from "react";

export default class OrgItem extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <p>
              {this.props.orgName}
            </p>
          </div>
          <div className="col-md-2">
            <p>
              {this.props.ID}
            </p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
