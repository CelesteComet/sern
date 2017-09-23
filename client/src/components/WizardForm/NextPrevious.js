import React from 'react';

const styles = {
  'marginLeft': '10px'
}

function NextPrevious({ next , previous }) {
  return (
    <div>
      <button className='waves-effect waves-light btn' onClick={ next }>Next</button>
      <button style={styles} className='waves-effect waves-light btn' onClick={ previous }>Previous</button>
    </div>
  );
}

export default NextPrevious;