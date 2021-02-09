import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectPage = createSelector(
  selectUserState,
  (state) => state.currentPage
);
