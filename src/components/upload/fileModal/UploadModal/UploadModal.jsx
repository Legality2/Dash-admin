import {React, useState } from 'react';
import PropTypes from 'prop-types';
import FileUpload from '../../FileUpload/FileUpload';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { Test } from './UploadModal.styles';


const UploadModal =  (props) => {
  const {
    buttonLabel,
    className
  } = props;

  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  

  return (
    <div>
      <Button color="warning" onClick={toggle}>Change Image</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>File Upload</ModalHeader>
        <ModalBody>
          {console.log(props)}
      <FileUpload closeModal={toggle}/>                                         
         
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

UploadModal.propTypes = {
  // bla: PropTypes.string,
};

UploadModal.defaultProps = {
  // bla: 'test',
};

export default UploadModal;
