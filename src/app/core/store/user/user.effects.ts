import { Params } from './../../../search/search.component';
import { SearchService } from './../../search.service';
import * as UserActions from './user.actions';
import * as fromUsers from '../user/user.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { concatMap, first, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.search),
      map((action) => UserActions.loadUsers({ key: action.key }))
    );
  });

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      withLatestFrom(
        this.store.pipe(
          select(fromUsers.selectPage),
          map((page) => page)
        )
      ),
      concatMap(([action, currentPage]) => {
        return this.searchService.searchUsers(action.key, currentPage).pipe(
          first((result) => !!result),
          map((result) => UserActions.loadUsersSuccess({ result }))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private store: Store
  ) {}
}
