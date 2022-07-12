import { UserFull } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPreview } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
count=1;
  userpreview:UserPreview[]=[];
  User!:UserPreview;

result=true
fn=''
ln=''
email=''
sendUserFull!:UserFull ;
constructor(private router: Router,private userService:UsersService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
this.getUsers();
  }
  public getUsers():void {
    this.userService.getUsers().subscribe(response => {this.userpreview=response.data; console.log(response);
        // const keys = response.headers.keys();
        // keys.forEach(key => console.log(`${key}: ${response.headers.get(key)}`));
    });
}
create():void{
  this.router.navigate(['create'],);
}
update(id:string){
 //this.userService.getUserById(id).subscribe((Response: any)=>{console.log(Response);this.sendUserFull=Response})
  this.router.navigate(['update/'+id],{queryParams:{result:this.result+"update",id:id}});

}
  createUser():void{
    this.userService.createUser({firstName:`Aya ${this.count}` ,lastName:`Jalal ${this.count}` ,email:`aya22@gmail.com`}).subscribe(response=>this.getUsers(),
    err=>console.log("error ocuured",err)


    );
    this.count++;
  }

  editUser(user:UserFull){
    const updateuser={
...user,
firstName:"Ahmad",
lastName:"ismeal",
    };
    this.userService.editAccount(updateuser.id,updateuser).subscribe(user=>{this.getUsers();})

  }

  deleteUser(id:string){
     this.userService.deleteAccount(id).subscribe((Response: any)=>{console.log(Response);this.getUsers();})
  }

getUserById(id:string){
  this.userService.getUserById(id).subscribe((Response: any)=>{this.sendUserFull=Response;console.log(Response+"aya jalal response"); })

}
goToDetails( id:string){
  this.router.navigate(['UserDetail/',id],{queryParams:{ id: id ,}});
}

}
