import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPreview } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  userpreview:UserPreview[]=[];
  User!:UserPreview;
  books: any = [];
  count=0


constructor(private router: Router,private userService:UsersService){}
  ngOnInit(): void {
this.getUsers();
  }
  public getUsers():void {
    this.userService.getUsers().subscribe(response => {this.userpreview=response.data; console.log(response);
        // const keys = response.headers.keys();
        // keys.forEach(key => console.log(`${key}: ${response.headers.get(key)}`));
    });
}
  createUser():void{
    this.userService.createUser({firstName:`Aya ${this.count}` ,lastName:`Jalal ${this.count}` ,email:`aya22@gmail.com`}).subscribe(response=>this.getUsers(),
    err=>console.log("error ocuured",err)


    );
    this.count++;
  }

  editUser(user:UserPreview){
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
  this.userService.getUserById(id).subscribe((Response: any)=>{console.log(Response);})

}
goToDetails( id:string){
  this.router.navigate(['UserDetail/',id],);
}

}
