import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserModel, UserFull, UserPreview } from '../model/user.model';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  userCome!:UserFull ;
  fn!:string;
  ls="";
  email="";
  userpreview:UserPreview[]=[];
id=''
showMsg= false;
titles=["mr", "ms", "mrs", "miss", "dr", ""];
 public model:UserFull={
   firstName: "", lastName: "", email: "",
   id: '',
   title: this.titles[5],
   gender: '',
   dateOfBirth: '',
   registerDate: '',
   phone: '',
   picture: '',
   location: undefined
 };
result='';


  constructor(private router: Router,private location: Location,private userService:UsersService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params=>{
     this.result=params['result'];
     this.id=params['id'];
      if( this.id && this.result){
     this.GetDataById(this.id);
    this.model={firstName:this.userCome.firstName,lastName: this.userCome.lastName, email: this.userCome.email,
    id: '',
    title: this.titles[5],
    gender: '',
    dateOfBirth: '',
    registerDate: '',
    phone: '',
    picture: '',
    location: undefined}



}else{
  console.log("do nothing ")
}


    });
//this.getUsers();
  }
  public getUsers():void {
    this.userService.getUsers().subscribe(response => {this.userpreview=response.data; console.log(response);
        // const keys = response.headers.keys();
        // keys.forEach(key => console.log(`${key}: ${response.headers.get(key)}`));
    });
}
create():void{
  this.router.navigate(['create']);
}
  // createUser():void{
  //   this.userService.createUser({firstName:"fn" ,lastName:`ls` ,email:`email`}).subscribe(response=>console.log(response),
  //   err=>console.log("error ocuured",err)


  //   );

  // }
  back(): void {
    this.location.back();
  }
  onSubmit(){

    this.userService.createUser({firstName:`${this.model.firstName}` ,
    lastName:`${this.model.lastName}` ,email:`${this.model.email}`
  }).subscribe(response=>{console.log(response);   this.showMsg=true;
    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['showUsers'] );

      // And any other code that should run only after 5s
    }, 2000);},
    err=>console.log("error ocuured",err)



    );
   }
  editUser(users:UserFull){
    const updateuser={
...users,
firstName:this.userCome.firstName,
lastName:this.userCome.lastName,

title:this.model.title,
picture:this.model.picture,
    };
    this.userService.editAccount(this.id,updateuser).subscribe(user=>{console.log(user+"update User")})
    this.showMsg= true;
  }

  GetDataById(id:string){
    this.userService.getUserById(id).subscribe(Response=>{console.log(Response+"response");this.userCome=Response})
    console.log(this.userCome+"try ");
  }
}
