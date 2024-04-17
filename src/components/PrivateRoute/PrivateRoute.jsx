import React, { Component } from 'react';
import authService from '../../services/auth.service';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { Test } from './PrivateRoute.styles';

 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
      const currentUser = authService.getCurrentUser();
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }

      // authorised so return component
      return <Component {...props} />
  }} />
)

export default PrivateRoute;