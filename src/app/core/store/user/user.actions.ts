import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/feature/user-item/user-item.component';

export const search = createAction('[User] Search', props<{ key: string }>());

export const selectUser = createAction(
  '[User] Select',
  props<{ selectedUser: User }>()
);

export const selectUserDetail = createAction(
  '[User] Select Detail',
  props<{ selectedUserDetail: any }>()
);

export const changePage = createAction(
  '[User] Change page',
  props<{ page: number }>()
);

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ key: string }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ result: any }>()
);

export const getUserDetailSuccess = createAction(
  '[User] Get User Detail Success',
  props<{ result: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
