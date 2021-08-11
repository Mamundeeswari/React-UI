import React from 'react';
import PropTypes from 'prop-types';
import './Report.css';
import ReportDetails from '../../components/ReportDetails/ReportDetails'

const Report = () => (
  <div className="Report RowWidth" data-testid="Report">
    <div class="container m-5 p-2">
      <div class="row">
          <div class="col-6 h4 Textcolour border-bottom border-grey">
              Your Weekly Reports
          </div>
          <div class="col-6 h4 Textcolour border-bottom border-grey">
              Your Monthly Reports
          </div>

          <div class="col-6 Textcolour ">
            <ReportDetails ReportHeading="Week commencing from DD/MM/YYYY"/>
          </div>
          <div class="col-6 Textcolour ">
            <ReportDetails ReportHeading="July" showButton="true"/>
          </div>

          <div class="col-6 Textcolour ">
          <ReportDetails ReportHeading="Week commencing from DD/MM/YYYY"/>
          </div>
          <div class="col-6 Textcolour ">
          <ReportDetails ReportHeading="June" showButton="true"/>
          </div>
          <div class="col-6 Textcolour ">
          <ReportDetails ReportHeading="Week commencing from DD/MM/YYYY"/>
          </div>
      </div>
    </div>
    
  </div>
);

Report.propTypes = {};

Report.defaultProps = {};

export default Report;
