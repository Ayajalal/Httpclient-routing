import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserFull } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
id='';
user:UserFull | undefined;
  constructor(private router: Router,private userService:UsersService,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log('inside details');
    this.activatedRoute.queryParams.subscribe(params=>{
      this.id=params['id'];
      console.log(this.id,'hi from user data details');
      if(this.id){

       this.GetDataById(this.id);
        console.log( this.GetDataById(this.id)+"function");
        console.log(this.id+"inside get id ")

      }
    });
  }
  GetDataById(id:string){
    this.userService.getUserById(id).subscribe(Response=>{console.log(Response+"response");this.user=Response})
    console.log(this.user+"try ");
  }


}
