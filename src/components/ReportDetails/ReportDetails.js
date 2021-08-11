import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ReportDetails.css';

class ReportDetails extends Component {
  render() {
          return (
  <div className="ReportDetails" data-testid="ReportDetails">
    <div className="Textcolour">{this.props.ReportHeading}</div>

    <div className="container p-2">
      <div className="row Textcolour">
        <div  className="col m-1 border-bottom border-danger">Total opportunities</div>
        <div  className="col m-1 border-bottom border-success">Total Leads</div>
        <div  className="col m-1 border-bottom border-danger" >Total Meetings booked</div>
      </div>
    </div>
    <div className="container p-2">
      <div className="row Textcolour">
        <div  className="col ">Client Name 1</div>
        <div  className="col">Client Name 1</div>
        <div  className="col">Client Name 1</div>
      </div>
    </div>
    <div className="container p-2">
      <div className="row Textcolour">
        <div  className="col">Client Name 2</div>
        <div  className="col">Client Name 2</div>
        <div  className="col">Client Name 2</div>
      </div>
    </div>
    <div className="container p-2">
      <div className="row Textcolour">
        <div  className="col">Client Name 3</div>
        <div  className="col">Client Name 3</div>
        <div  className="col">Client Name 3</div>
      </div>
    </div>
    <div className = "text-center">
      {this.props.showButton &&
      <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autocomplete="off">
        See all
      </button> }
      </div>
  </div>
  )
}
};

ReportDetails.propTypes = {};

ReportDetails.defaultProps = {
    ReportHeading: "ReportHeading", 
    showButton: false
};

export default ReportDetails;
