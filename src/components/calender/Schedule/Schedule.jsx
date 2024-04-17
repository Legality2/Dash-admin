import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import CeventModal from '../CeventModal/CeventModal';
import EventModalV from '../EventModalV/EventModalV';
//import { Test } from './Schedule.styles';
//dev
var dev = "http://192.168.5.235";
var server = "http://127.0.0.1:4000";
class Schedule extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      modal: false,
      color: 'green',
      textColor: 'black',
      clickedEvent: {},
      isDisplayed: false,
      test: 'paul',
      events: [],
    };
     
    this.newEvent = this.newEvent.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    
    this.input = React.createRef();

   
    
    this.getEvents = () => {
      axios.get('http://192.168.5.152:4000/events')
      .then(res => {
        const event = res.data;
        
        console.log(res);
       
          //close modal
          this.setState({events: event});
       
        
      });
    };

    this.deleteEvent = (id) => {
      console.log(id)
      axios.delete('/event:id', {params: {id: id}}).then(res => {
        console.log(res.data);
        alert(res.data.msg);
        //event object
        var nObj = {
          deleteEventTrue: true,
          close: false
        };
        this.getEvents(nObj);
      });
    }
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modal: false
    });
  }

  newEvent = (event) => {
    event.preventDefault();
    var test = {
      title: this.inputTitle.value,
      ticket: this.inputTicket.value,
      description: this.inputDescription.value,
      start: this.inputStart.value,
      end: this.inputEnd.value
    };
    
    console.log(test);

    axios.post('http://localhost:4000/event', {
      title: test.title,
      ticket: test.ticket,
      description: test.description,
      start: test.start,
      end: test.end
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });

    this.getEvents();
  }
  handleEventChange = () => {
    this.getEvents();
  }

  handleOnChange = (event) => {
    console.log(event);
    this.setState({
      newEvent: {
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount = () => {
    console.log('Calender mounted');
    this.getEvents();
      
  }

  handleEventClick = (arg) => {
    
   this.modalOpen();
   console.log(arg);
    const eventData = {
      title: arg.event._def.title,
      ticket: arg.event._def.extendedProps.ticket,
      jobDescription: arg.event._def.extendedProps.jobDescription,
      location:  arg.event._def.extendedProps.location,
      _id: arg.event._def.extendedProps._id
    }; 
   
    console.log(eventData);
    this.setState({clickedEvent: eventData});
    
  }

  componentWillMount = () => {
    console.log('Schedule will mount');
  }

  

  render () {
    
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      
      <div className="ScheduleWrapper">
        <div className="container-fluid">
                            <p style={{textAlign: 'center'}}><h1 style={{color: 'green', fontWeight: 'bold'}}>YellowStone Orlando South</h1></p>
                             <h3 className="mb-1" style={{color: "#0c3026", fontWeight: "bold", textShadow: "19px -11px 3px #e8dd21", borderColor: "transparent"}}>Enhancement Schedule</h3>
                             <div className="row">
                                 <div className="col-sm-12 col-md-12 col-xs-12">
                                     <nav className="navbar navbar-light navbar-expand-sm" style={{background: "rgba(57,102,21,0.85)"}}>
                                         <div className="container-fluid"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                                             <div className="collapse navbar-collapse" id="navcol-1">
                                                 <ul className="nav navbar-nav" data-target="#eventVModal">
                                                     <li className="nav-item pills" style={{background: "#c6ad0f;"}}><a className="nav-link"><CeventModal handleEventChange={this.handleEventChange} /></a></li>
                                                   
                                                  
                                                 </ul>
                                             </div>
                                         </div>
                                     </nav>
                                 </div>
                                
                                 <div className="col-xs-12 col-md-12 col-sm-12">
                                     <div className="card">
                                         <div className="card-header" style={{background: "#0c3026"}}>
                                         <EventModalV isOpen={this.state.modal} modalClose={this.modalClose} getEvents={this.getEvents} deleteEvent={this.deleteEvent} viewEvent={this.state.clickedEvent} deleteEvent={this.deleteEvent} />
                                         </div>
                                         <div className="card-body" style={{height: "100%"}}>
                                         <FullCalendar 
        
                                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                                headerToolbar={{
                                                  
                                                  center: 'title,dayGridMonth,timeGridWeek,timeGridDay'
                                                }}
                                            initialView="dayGridMonth"
                                            handleWindowResize
                                            events={this.state.events}
                                            eventColor={this.state.color}
                                            eventTextColor={this.state.textColor}
                                            eventClick={this.handleEventClick}
                                            eventDidMount={this.eventDidMount}
                                          />
                                      
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
      </div>
    );
  }
}

Schedule.propTypes = {
  // bla: PropTypes.string,
};

Schedule.defaultProps = {
  // bla: 'test',
};

export default Schedule;
