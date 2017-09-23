import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cardStyles = {
  'float': 'left',
  'margin': '0px',
  'width': '25vw',
  'paddingLeft': '10px'
}

function Card({ data }) {
  const { name, location, startDate, endDate, _id, images } = data;
  return (
      <Link to={`/venues/${_id}`}>
        <div className="inline-block border-box" style={ cardStyles }>
          <div className="card small">
            <div className="card-image">
              <img src={ images[0] } />
              <span className="card-title">{ name }</span>
            </div>
            <div className="card-content">
              <p>{ location }</p>
              <p>{ startDate }</p>
              <p>{ endDate }</p>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default Card;

