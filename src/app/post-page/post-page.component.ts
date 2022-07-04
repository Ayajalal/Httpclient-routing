import { Post, PostPreview } from './../model/UserPost.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostUserService } from '../services/post-user.service';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post:Post | undefined;
  constructor(private postService:PostUserService,private router: Router,private activatedRoute: ActivatedRoute) { }
previewPost:PostPreview[]=[]
count=0;
id=''
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.id=params['id'];
      console.log(this.id,'hi from user post ');
      if(this.id){

        this.getPost();

      }
    });

  }
  getPost(){
    if(this.id){
    this.postService.getPost().subscribe(response=>{console.log(response.data);this.previewPost=response.data;})}
  }

  getPostById(id:string){
    this.postService.getPostById(id).subscribe(response=>{console.log(response);this.post=response;})
  }
  createPost():void{
    this.postService.createPost({
      text: "there's a light in everybody,send out your ray of sunshine.",
       likes: 10,
      image: "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      tags: ["animal", "dog", "golden retriever"],
      owner: this.id,
    }).subscribe(response=>{this.getPost();console.log(response)}
   , err=>console.log("error ocuured",err)
 );
   // this.count++;
  }
  editPost(post:PostPreview){
    const UpdatePost={
      ...post,
      text:"updateText",
      like:20,
      image:"https://images.pexels.com/photos/12656616/pexels-photo-12656616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    this.postService.editPost(UpdatePost.id,UpdatePost).subscribe(response=>{this.getPost()})
  }
  deletePost(id:string){
    this.postService.deletePost(id).subscribe((Response: any)=>{console.log(Response);this.getPost();})
 }

}

