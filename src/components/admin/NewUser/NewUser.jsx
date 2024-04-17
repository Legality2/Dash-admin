import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NewUser.styles';

class NewUser extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('NewUser will mount');
  }

  componentDidMount = () => {
    console.log('NewUser mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NewUser will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NewUser will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NewUser did update');
  }

  componentWillUnmount = () => {
    console.log('NewUser will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NewUserWrapper">
        Test content
      </div>
    );
  }
}

NewUser.propTypes = {
  // bla: PropTypes.string,
};

NewUser.defaultProps = {
  // bla: 'test',
};

export default NewUser;
