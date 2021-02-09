import { createAction, props } from '@ngrx/store';

export const search = createAction('[User] Search', props<{ key: string }>());

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

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
