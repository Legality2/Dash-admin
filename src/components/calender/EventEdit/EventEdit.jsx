import React, { PureComponent } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { Test } from './EventEdit.styles';
var server = "http://127.0.0.1:4000";

class EventEdit extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      updatedEvent: {}
    };
    
    this.input = React.createRef();
    this.updateEvent = this.updateEvent.bind(this);
  }


  
  updateEvent = (event) => {
    event.preventDefault();
    const eventId = this.props.eventData._id;
    const updates = {};
    var test = {
      title: this.inputTitle.value,
      ticket: this.inputTicket.value,
      location: this.inputLocation.value,
      jobDescription: this.inputDescription.value,
      start: this.inputStart.value,
      end: this.inputEnd.value
    };

  const entries = Object.keys(test);
  
  for (let i = 0; i < entries.length; i++) {
    if(Object.values(test)[i] != ''){
      updates[entries[i]] = Object.values(test)[i];
    }
  };
    
    
     axios.put('/event:id', {event: updates, params: {
      id: eventId
    }}).then((res) => {
      alert(res.data.msg);
    })
    .catch(function (error) {
      alert(error.toString);
    });
    
    this.props.getEvents();
  }
 
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      
      <form onSubmit={this.updateEvent}>
         <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Title</span></div><input className="form-control" type="text" placeholder={this.props.eventData.title} ref={(input) => this.inputTitle = input }/>
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">#ticket</span></div><input className="form-control" placeholder={this.props.eventData.ticket} ref={(input) => this.inputTicket = input } type="text" />
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Location</span></div><input className="form-control" type="text" placeholder={this.props.eventData.location} ref={(input) => this.inputLocation = input } />
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Description</span></div><textarea className="form-control" placeholder={this.props.eventData.jobDescription} ref={(input) => this.inputDescription = input }></textarea>
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group-prepend"><span className="input-group-text">Event Start</span><input type="date"  ref={(input) => this.inputStart = input }/>
          
          </div>
      </div>
      <div className="form-group">
          <div className="input-group-prepend"><span className="input-group-text">Event End</span><input type="date" placeholder={this.props.eventData.end} ref={(input) => this.inputEnd = input }/>
          
          </div>
      </div>
      <div className="form-group">
     
          </div>
      <button className="btn btn-outline-success">Update Event</button>
      </form>
    );
  }
}

EventEdit.propTypes = {
  // bla: PropTypes.string,
};

EventEdit.defaultProps = {
  // bla: 'test',
};

export default EventEdit;
