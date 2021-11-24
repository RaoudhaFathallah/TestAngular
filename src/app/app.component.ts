import { Component, OnInit } from '@angular/core';
import { Posts1 } from './posts1';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Posts1[]=[];
constructor(public rs: RestService) { }

ngOnInit(): void {
  this.rs.getPosts().subscribe((response: any[])=>{
    this.posts=response;
  })
}

}
