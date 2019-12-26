import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import { ApprovalCard } from './ApprovalCard';
import { CommentDetail } from './CommentDetail';

const App = () => {
  return (
    <div
      className="ui container comments centered grid"
      style={{ marginTop: '50px' }}
    >
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
