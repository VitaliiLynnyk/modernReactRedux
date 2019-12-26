import React from 'react';

export const ApprovalCard = props => {
  const { children } = props;

  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};
