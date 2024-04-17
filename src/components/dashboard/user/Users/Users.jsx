import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
//import { Test } from './Users.styles';

class Users extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      users: null
    };
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    axios.get("http://192.168.5.152:4000/api/users")
    .then(res => {
      const users = res.data;
      console.log(res.data);
      
      this.setState({
        users: users
      });
    });
  }

  componentWillMount = () => {
    console.log('Users will mount');
    this.getUsers();
  }

  componentDidMount = () => {
    console.log('Users mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Users will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Users will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Users did update');
  }

  componentWillUnmount = () => {
    console.log('Users will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UsersWrapper">
        
      </div>
    );
  }
}

Users.propTypes = {
  // bla: PropTypes.string,
};

Users.defaultProps = {
  // bla: 'test',
};

export default Users;
