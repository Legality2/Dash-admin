import React, { PureComponent } from 'react';
import axios from 'axios'
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
//import { Test } from './EventForm.styles';

class EventForm extends PureComponent { 
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      hasError: false,
      eventColor: '#fff'
    };

    
    this.newEvent = this.newEvent.bind(this);
   
    this.input = React.createRef();

    
     
  }

  handleChangeComplete = (color, event) => {
    this.setState({ eventColor: color.hex });
  };

    newEvent = (event) => {
    event.preventDefault();
    var test = {
      title: this.inputTitle.value,
      ticket: this.inputTicket.value,
      description: this.inputDescription.value,
      location: this.inputLocation.value,
      color: this.state.eventColor,
      start: this.inputStart.value,
      end: this.inputEnd.value
    };
    
    console.log(test);

    axios.post('/event', {
      title: test.title,
      ticket: test.ticket,
      description: test.description,
      location: test.location,
      color: test.color,
      start: test.start,
      end: test.end
    })
    .then(function (response) {
      console.log(response);
    
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  componentWillMount = () => {
    console.log('EventForm will mount');
  }

  

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      
        <form onSubmit={this.newEvent}>
         <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Title</span></div><input className="form-control" type="text" ref={(input) => this.inputTitle = input }/>
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">#ticket</span></div><input className="form-control" ref={(input) => this.inputTicket = input } type="text" />
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Location</span></div><input className="form-control" type="text" ref={(input) => this.inputLocation = input } />
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Description</span></div><textarea className="form-control" ref={(input) => this.inputDescription = input }></textarea>
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group-prepend"><span className="input-group-text">Event Start</span><input type="date" ref={(input) => this.inputStart = input }/></div>
      </div>
      <div className="form-group">
          <div className="input-group-prepend"><span className="input-group-text">Event End</span><input type="date" ref={(input) => this.inputEnd = input }/></div>
      </div>
      <div className="form-group">
      <SketchPicker
        color={ this.state.eventColor }
        onChangeComplete={ this.handleChangeComplete }
      />
          </div>
      <button>new event</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  // bla: PropTypes.string,
};

EventForm.defaultProps = {
  // bla: 'test',
};

export default EventForm;
