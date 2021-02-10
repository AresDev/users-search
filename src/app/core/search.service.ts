import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchUsers(key: string, page: number): Observable<any> {
    return this.http.get(
      `${environment.settings.baseURL}/search/users?q=${key}&per_page=${environment.settings.pageSize}&page=${page}`
    );
    // .pipe(
    //   concatMap((result: any) => {
    //     return from(result.items).pipe(
    //       shareReplay({ bufferSize: 1, refCount: true }),
    //       concatMap((user: User) =>
    //         this.http.get(user.url).pipe(
    //           shareReplay({ bufferSize: 1, refCount: true }),
    //           map((detail) => ({ ...user, detail } as User))
    //         )
    //       ),
    //       reduce((newUsers, currentUser) => {
    //         newUsers.push(currentUser);
    //         return newUsers;
    //       }, []),
    //       switchMap((items) => {
    //         result.items = items;
    //         return of(result);
    //       })
    //     );
    //   })
    // );
  }
}
