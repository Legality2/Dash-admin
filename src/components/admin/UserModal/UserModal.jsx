import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardBody } from 'reactstrap';
import { Route, Switch, Redirect, Link, BrowserRouter, MemoryRouter } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';
import PropTypes from 'prop-types';
import EditUser from '../EditUser/EditUser';
//import { Test } from './UserModal.styles';

class UserModal extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.props.modalClose();
  };

  componentWillMount = () => {
    console.log('UserModal will mount');
  }

  componentDidMount = () => {
    console.log('UserModal mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('UserModal will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('UserModal will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('UserModal did update');
  }

  componentWillUnmount = () => {
    console.log('UserModal will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    if(this.props.editUser == true) {
      return (
        <div className="UserModalWrapper">
        <MemoryRouter>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} >
          <ModalHeader >User</ModalHeader>
          <ModalBody>
          
          <Card>
            <CardTitle>
              
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" to={'/new/user'}>New User</Link>
              </li>  
            </ul>
            
            </CardTitle>
            <CardBody>
            
            
            
            
  
            <EditUser />
         
            
            
  
  
            </CardBody>  
          </Card>                                        
         
         </ModalBody>
          <ModalFooter>
            
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </MemoryRouter>
        </div>
      )
    } else {
    return (
      <div className="UserModalWrapper">
      <MemoryRouter>
      <Modal isOpen={this.props.isOpen} toggle={this.toggle} >
        <ModalHeader >User</ModalHeader>
        <ModalBody>
        
        <Card>
          <CardTitle>
            
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to={'/new/user'}>New User</Link>
            </li>  
          </ul>
          
          </CardTitle>
          <CardBody>
          
          
          
          

          <UserForm />
       
          
          


          </CardBody>  
        </Card>                                        
       
       </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      </MemoryRouter>
      </div>
    );
    }
  }
}

UserModal.propTypes = {
  // bla: PropTypes.string,
};

UserModal.defaultProps = {
  // bla: 'test',
};

export default UserModal;
