import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BEConnectionService {
  constructor(private http: HttpClient) {}

  private url = 'https://localhost:7018/test/testGet';

  getData(): Observable<any> {
    return this.http.get(this.url, {
      responseType: 'text',
    });
  }
}
