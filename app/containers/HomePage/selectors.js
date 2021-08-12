import { createSelector } from 'reselect';
import { initialState } from './reducer';

const homepageDomain = state => state.counter || initialState;

const makeSelectValue = () =>
  createSelector(
    homepageDomain,
    substate => substate.value,
  );

const makeSelectLoading = () =>
  createSelector(
    homepageDomain,
    substate => substate.loading,
  );

export { makeSelectValue, makeSelectLoading };
