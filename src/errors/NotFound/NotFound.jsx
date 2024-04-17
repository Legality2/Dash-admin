import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import { Test } from './NotFound.styles';

const NotFound = (props) => (
  <div className="NotFoundWrapper">
  
    <h1>404 - Not Found!</h1>
    <Link to="/dash/schedule">
      Go To schedule
    </Link>
 
  </div>
);

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
