/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectLoading, makeSelectValue } from './selectors';
import reducer from './reducer';
import { decrement, increment } from './actions';

function HomePage(props) {
  console.log('xxxxxx', props);
  const { value, dispatch } = props;
  useInjectReducer({ key: 'counter', reducer });
  return (
    <div className="text-center">
      <h1 className="text-center">Counter</h1>
      <div>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <div>{value}</div>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>{' '}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  value: makeSelectValue(),
  loadng: makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
