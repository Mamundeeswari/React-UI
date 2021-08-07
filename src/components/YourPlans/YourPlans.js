import React from 'react';
import PropTypes from 'prop-types';
import './YourPlans.css';

const YourPlans = () => (
  <div className="YourPlans p-5 " data-testid="YourPlans">
    <div className="h3 Textcolour border-bottom border-grey">Your Plan</div>
    <div className="h3 Textcolour p-2">Done with you</div>
    <div className="h5 Textcolour p-3">
      Have full control replying to leads and handling appointments - but let our experts set up your campaigns
      <div className = "float-end p-2">
      <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autocomplete="off">
        View Other Plans
      </button>
      </div>
      
    </div>
    <div className="Textcolour">
    <ul className="p-4">
      <li>  1 LinkedIn & 1 email account included</li>
      <li>  Automated Prospecting</li>
      <li>  Sales Lead Responses</li>
      <li>  Multi channel Nurturing</li>
      <li>  LinkedIn and email touchpoints</li>
      <li>  Includes appointments-setting</li>
      <li>  1 Sales Development Rep</li>
      <li>  Targeting and Copyrighting Support</li>
      <li>  Real-time Reports</li>
      <li>  Auto-lead Notifications</li>
      <li>  Stack/Inbox/CRM Integration</li>
    </ul>
    </div>
    <div className="h3 Textcolour p-2 border-bottom border-grey">Want to upgrade your plan?</div>
    <div className="h5 Textcolour p-3"> To change your plan be sure to contact a member of the team via email or chosen CRM Channel. Alternatively view our other plans and options on the website https://www.newson.io/</div>
  </div>
);

YourPlans.propTypes = {};

YourPlans.defaultProps = {};

export default YourPlans;
