import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Params } from '../search/search.component';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchUsers(params: Params): Observable<any> {
    return this.http.get(
      `${environment.settings.baseURL}/search/users?q=${params.key}&per_page=${params.pageSize}&page=${params.page}`
    );
  }
}
