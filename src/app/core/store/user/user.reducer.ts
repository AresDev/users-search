import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/feature/user-item/user-item.component';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  key: string;
  totalUsers: number;
  currentPage: number;
  users: User[];
  loading: boolean;
  error: string;
  selectedUser: User;
  selectedUserDetail: any;
}

export const initialState: State = {
  key: null,
  totalUsers: null,
  currentPage: 1,
  users: [],
  loading: false,
  error: null,
  selectedUser: null,
  selectedUserDetail: null,
};

export const reducer = createReducer(
  initialState,
  on(
    UserActions.search,
    (state, action): State => {
      return {
        ...state,
        key: action.key,
      };
    }
  ),

  on(
    UserActions.changePage,
    (state, action): State => {
      return {
        ...state,
        currentPage: action.page,
      };
    }
  ),

  on(
    UserActions.loadUsers,
    (state): State => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
  ),

  on(
    UserActions.loadUsersSuccess,
    (state, action): State => {
      return {
        ...state,
        users: action.result.items,
        totalUsers: action.result.total_count,
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
  ),

  on(
    UserActions.selectUser,
    (state, action): State => {
      return {
        ...state,
        selectedUser: action.selectedUser,
      };
    }
  ),

  on(
    UserActions.selectUserDetail,
    (state, action): State => {
      return {
        ...state,
        selectedUserDetail: action.selectedUserDetail,
      };
    }
  )
);
