import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './EventView.styles';

class EventView extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  
  }

  
  
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="EventViewWrapper">
        <ul className="list-group">
          <li className="list-group-item"><span style={{fontWeight: 'bold'}}>Title:  </span>{this.props.eventData.title}</li>
          <li className="list-group-item"><span>Location:  </span> {this.props.eventData.location}</li>
          <li className="list-group-item"><span>#Ticket:  </span>{this.props.eventData.ticket}</li>
          <li className="list-group-item"><span>Description:  </span>{this.props.eventData.jobDescription}</li>
      </ul>
      <button className="btn btn-outline-danger" onClick={() => {this.props.deleteEvent(this.props.eventData._id)}}>Delete</button>
      </div>
    );
  }
}

EventView.propTypes = {
  // bla: PropTypes.string,
};

EventView.defaultProps = {
  // bla: 'test',
};

export default EventView;
