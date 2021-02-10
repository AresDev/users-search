import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectSearchKey = createSelector(
  selectUserState,
  (state) => state.key
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectCurrentPage = createSelector(
  selectUserState,
  (state) => state.currentPage
);

export const selectTotalUsers = createSelector(
  selectUserState,
  (state) => state.totalUsers
);
