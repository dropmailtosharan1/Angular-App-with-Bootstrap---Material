/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private url = 'api/users';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;

    return this.http
      .get<User>(url)
      .pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  updateUser(user: User): any {
    return this.http.put(this.url, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('updateUser'))
      );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addUser( user: User ): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('addUser'))
      );
  }

  deleteUser( user: User ): Observable<User> {
    const url = `${this.url}/${user.id}`;

    return this.http.delete<User>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('deleteUser id=${user.id}'))
      );
  }
  
}