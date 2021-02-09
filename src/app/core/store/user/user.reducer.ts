import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/feature/user-item/user-item.component';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  key: string;
  currentPage: number;
  users: User[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  key: null,
  currentPage: 1,
  users: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.search, (state, action) => {
    return {
      ...state,
      key: action.key,
    };
  }),

  on(UserActions.changePage, (state, action) => {
    return {
      ...state,
      currentPage: action.page,
    };
  }),

  on(UserActions.loadUsers, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),

  on(
    UserActions.loadUsersSuccess,
    (state, action): State => {
      return {
        ...state,
        users: action.result.items,
        loading: false,
      };
    }
  ),

  on(
    UserActions.loadUsersFailure,
    (state, action): State => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  )
);
