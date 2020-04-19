import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompDetailService {
  URL = 'http://localhost:3000/Sysinfo';

  constructor(private http: HttpClient) {}

  getClientHostName(): Observable<string> {
    const response = this.http.get<string>(this.URL);
    return response;
  }
}
