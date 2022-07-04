import { Post, PostCreate, PostPreview } from './../model/UserPost.model';
import { catchError, Observable, throwError, observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
  baseURL ='https://dummyapi.io/data/v1';
    options = {
        headers: new HttpHeaders().set('app-id', '62bbf1364caab43c368d65d3'),
    };

  constructor(private http: HttpClient) { }
  getPost():Observable<List<PostPreview>>{
    return this.http.get<List<PostPreview>>(`${this.baseURL}/post`, { ...this.options,  params:{created:1}});
  }
  createPost(payload:PostCreate):Observable<Post> {
    return this.http.post<Post>(`${this.baseURL}/post/create`,payload,this.options).pipe(

      catchError(this.handelError)
    );

  }
  private handelError(error: HttpErrorResponse) :Observable<never> {
    console.log("inside handel Error",error);
    return throwError(()=>new Error('some errir occured '));

  }
  getPostById(id:string):Observable<Post>{
    return this.http.get<Post>(`${this.baseURL}/post/`+id,{ ...this.options,})

  }
  editPost(id:string,body:PostPreview):Observable<PostPreview>{
    return this.http.put<PostPreview>(`${this.baseURL}/post/`+id,body,this.options).pipe(

      catchError(this.handelError)
    );

  }
  deletePost(id:string):Observable<PostPreview>{
    return this.http.delete<PostPreview>(`${this.baseURL}/post/`+id,this.options).pipe(

      catchError(this.handelError)
    );

  }

}
