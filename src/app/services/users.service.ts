import { CreateUserModel, UserFull } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, observable, Observable, retry, throwError } from 'rxjs';
import { List, UserPreview } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userEdit:UserFull[]=[];
  baseURL ='https://dummyapi.io/data/v1';
    options = {
        headers: new HttpHeaders().set('app-id', '62bbf1364caab43c368d65d3'),
    };
  constructor(private http: HttpClient) { }
  getUsers(): Observable<List<UserPreview>> {
    return this.http.get<List<UserPreview>>(`${this.baseURL}/user`, { ...this.options,
      params:{created:1}
       });
}
createUser(payLoad:CreateUserModel):Observable<UserFull>{
  return this.http.post<UserFull>( `${this.baseURL}/user/create`,payLoad ,this.options).pipe(
    retry(3),
    catchError(this.handelError)
  );




}
 private handelError(error: HttpErrorResponse) :Observable<never> {
  console.log("inside handel Error",error);
  return throwError(()=>new Error('some errir occured '));

}


editAccount(id:string,body:UserPreview):Observable<UserPreview> {
return this.http.put<UserPreview>(`${this.baseURL}/user/`+id,body,this.options).pipe(

  catchError(this.handelError)
);



}
deleteAccount(id:string):Observable<UserPreview>{
  return this.http.delete<UserPreview>(`${this.baseURL}/user/`+id,{...this.options});

}
getUserById(id:string):Observable<UserFull>{
  return this.http.get<UserFull>(`${this.baseURL}/user/`+id,{ ...this.options,})

}

}
