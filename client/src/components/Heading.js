import React from 'react';
import PropTypes from 'prop-types';

function Heading({ text }) {
  return (
    <h4>{ text }</h4>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;