import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PropTypes from 'prop-types';
import EventForm from '../EventForm/EventForm';
//import { Test } from './CeventModal.styles';

const CeventModal =  (props) => {
  const {
    buttonLabel,
    className
  } = props;

  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  

  return (
    <div>
      <Button color="warning" onClick={toggle}>New Event</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create Event</ModalHeader>
        <ModalBody>
          {console.log(props)}
      <EventForm handleEventChange={props.handleEventChange} closeModal={toggle}/>                                         
         
       </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={function(event){
            toggle();
            props.handleEventChange();
          }}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default CeventModal;
