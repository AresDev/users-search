import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchUsers(key: string): Observable<any> {
    return this.http.get(
      `${environment.settings.baseURL}/search/users?q=${key}`
    );
  }
}
