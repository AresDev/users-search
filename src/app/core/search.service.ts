import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, reduce, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Params } from '../search/search.component';
import { User } from '../shared/feature/user-item/user-item.component';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchUsers(key: string, page: number): Observable<any> {
    return this.http
      .get(
        `${environment.settings.baseURL}/search/users?q=${key}&per_page=${environment.settings.pageSize}&page=${page}`
      )
      .pipe(
        concatMap((result: any) => {
          return from(result.items).pipe(
            concatMap((user: User) =>
              this.http
                .get(user.url)
                .pipe(map((detail) => ({ ...user, detail } as User)))
            ),
            reduce((newUsers, currentUser) => {
              newUsers.push(currentUser);
              return newUsers;
            }, []),
            switchMap((items) => {
              result.items = items;
              return of(result);
            })
          );
        })
      );
  }
}
