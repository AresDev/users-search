import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  first,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ToastService } from '../../toast.service';
import * as fromUsers from '../user/user.selectors';
import { SearchService } from './../../search.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.search),
      map((action) => UserActions.loadUsers({ key: action.key }))
    );
  });

  changePage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.changePage),
      withLatestFrom(
        this.store.pipe(
          select(fromUsers.selectSearchKey),
          map((searchKey) => searchKey)
        )
      ),
      map(([action, searchKey]) => UserActions.loadUsers({ key: searchKey }))
    );
  });

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      withLatestFrom(
        this.store.pipe(
          select(fromUsers.selectCurrentPage),
          map((page) => page)
        )
      ),
      concatMap(([action, currentPage]) => {
        return this.searchService.searchUsers(action.key, currentPage).pipe(
          first((result) => !!result),
          map((result) => UserActions.loadUsersSuccess({ result })),
          catchError((result: any) =>
            of(
              UserActions.loadUsersFailure({
                error: result.error,
              })
            )
          )
        );
      })
    );
  });

  loadUsersFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsersFailure),
      tap((action) => {
        this.toastService.showErrorToast({ message: action.error.message });
      })
    );
  });

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private store: Store,
    private toastService: ToastService
  ) {}
}
