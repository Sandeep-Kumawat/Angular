import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoItem } from './TodoItem';
import {catchError,tap} from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }
  getTodoItem():Observable<TodoItem[]>{
    const apiurl = environment.apibaseurl+"mytasks/items";
    const headers = {'content-type':'application/json'};

    return this.http.get<TodoItem[]>(apiurl,{'headers':headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=>{
        return throwError(error);
      })
    );
  }
  private handleError(error:any)
  {
    console.error(error);
    return throwError(error);
  }
}
