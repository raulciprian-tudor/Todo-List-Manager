import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BEConnectionService {
  constructor(private http: HttpClient) {}

  private url = 'https://localhost:7018/todo/CreateNewTodoItem';

  createNewTodoItem(todoItem: any): Observable<any> {
    return this.http.post(this.url, todoItem, {
      responseType: 'text',
    });
  }
}
