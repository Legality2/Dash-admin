import React, { useState } from 'react';
import { faCoffee, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const removeUser = (id) => {
    axios.delete('http://192.168.5.152:4000/api/user/:id', {params: {id: id}}).then(res => {
      console.log(res.data);
      alert(res.data.msg);
      //users update
      return  <Redirect to="/dash/team" />
    });
  };
  const removeProduct = (id) => {
    axios.delete('http://192.168.5.152:4000/api/products/:id', {params: {id: id}}).then(res => {
      console.log(res.data);
      alert(res.data.msg);
      //users update
      return  <Redirect to="/dash/products" />
    });
  };

  const toggle = () => setDropdownOpen(prevState => !prevState);

  console.log(props);
  if(props.userId){
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        <FontAwesomeIcon icon={faUserCog} /> Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>options</DropdownItem>
          <DropdownItem>Edit:{props.userId} </DropdownItem>
          <DropdownItem  onClick={() => { removeUser(props.userId)}}>delete </DropdownItem>
         
        </DropdownMenu>
      </Dropdown>
    );
  } else if(props.itemId){
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        <FontAwesomeIcon icon={faUserCog} /> Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>options</DropdownItem>
          <DropdownItem>Edit:{props.itemId} </DropdownItem>
          <DropdownItem  onClick={() => { removeProduct(props.itemId)}}>delete </DropdownItem>
         
        </DropdownMenu>
      </Dropdown>
    );
  }
  
}

export default DropDown;