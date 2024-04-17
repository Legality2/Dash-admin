import {React, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProductForm from '../prodForm/ProductForm/ProductForm';
//import { Test } from './UploadModal.styles';


const ProdModal =  (props) => {
  const {
    buttonLabel,
    className
  } = props;

  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  

  return (
    <div>
      <Button color="dark" onClick={toggle}>New Product</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Product form</ModalHeader>
        <ModalBody>
          {console.log(props)}
                                             
         <ProductForm closeModal={toggle} />
       </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={function(event){
            toggle();
          }}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ProdModal.propTypes = {
  // bla: PropTypes.string,
};

ProdModal.defaultProps = {
  // bla: 'test',
};

export default ProdModal;
