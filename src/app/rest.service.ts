import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Posts1 } from './posts1';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string ="http://localhost:3000/posts";
  getPosts(){
    return this.http.get<Posts1[]>(this.url);
  }

}
