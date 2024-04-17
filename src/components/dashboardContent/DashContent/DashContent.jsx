import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import Schedule from '../../calender/Schedule/Schedule';
import EventForm from '../../calender/EventForm/EventForm';
//import { Test } from './DashContent.styles';

class About extends Component {
  render() {
    return <h1>this about me</h1>
  }
}
class Admin extends Component {
  render() {
    return <h1>this is admin view</h1>
  }
}


class DashContent extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('DashContent will mount');
  }

  componentDidMount = () => {
    console.log('DashContent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('DashContent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('DashContent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('DashContent did update');
  }

  componentWillUnmount = () => {
    console.log('DashContent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      
      <div className="DashContentWrapper">
      <div className="container-fluid">
       
      
      </div>
      </div>
     
    );
  }
}

DashContent.propTypes = {
  // bla: PropTypes.string,
};

DashContent.defaultProps = {
  // bla: 'test',
};

export default DashContent;
