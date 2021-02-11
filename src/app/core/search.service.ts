import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, map, switchMap } from 'rxjs/operators';
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
  }

  getUserDetail(url: string): Observable<any> {
    return this.http.get(url).pipe(
      concatMap((userDetail: any) =>
        this.http.get(`${userDetail.url}/starred`).pipe(
          map((stared: any[]) => stared.length),
          map((stars) => ({ ...userDetail, stars }))
        )
      )
    );
  }
}
