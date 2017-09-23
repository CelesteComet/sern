import React from 'react';
import moment from 'moment';

const styles = {
  'fontSize': '19px'
}

function UpcomingTimes({ date , startTime, endTime }) {
  return (
    <div>
      <p style={ styles }>{ moment(date).format('MMM Do YY') }</p>
      <p>{startTime} - {endTime}</p>
      <div className='divider'></div>
    </div>
  );
}

export default UpcomingTimes;