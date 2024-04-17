import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardBody } from 'reactstrap';
import { Route, Switch, Redirect, Link, BrowserRouter, MemoryRouter } from 'react-router-dom';
import EventEdit from '../EventEdit/EventEdit';
import EventView from '../EventView/EventView';
import PropTypes from 'prop-types';

//import { Test } from './CeventModal.styles';

const EventModalV  =  (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const url = '/schedule/event';
  const url2 = '/schedule/event/edit';
  console.log(props);
  const id = props.viewEvent._id;
  const toggle = () => {
    props.modalClose();
  };

  return (

    <div>
      <MemoryRouter>
      
      <Modal isOpen={props.isOpen} toggle={toggle} className={className}>
        <ModalHeader >Event</ModalHeader>
        <ModalBody>
        
        <Card>
          <CardTitle>
            
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to={`${url}/${id}`}>Event</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${url2}/${id}`}>Edit Event</Link>
            </li>
          </ul>
          
          </CardTitle>
          <CardBody>
          
      
          <Route path="/schedule/event/:id" exact render={() => <EventView eventData={props.viewEvent} deleteEvent={props.deleteEvent} />} />
          <Route path="/schedule/event/edit/:id" exact render={() => <EventEdit eventData={props.viewEvent} getEvents={props.getEvents}  />} />
          
          <Route />


          </CardBody>  
        </Card>                                        
       
       </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      </MemoryRouter>
    </div>
  );
}


EventModalV.propTypes = {
  // bla: PropTypes.string,
};

EventModalV.defaultProps = {
  // bla: 'test',
};

export default EventModalV;
