import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private router: Router,private location: Location, private activatedRoute: ActivatedRoute)  { }
id='';

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params=>{
      this.id=params['id'];
      console.log(this.id,'hi from user data details');



    });
  }

  back(): void {
    this.location.back()
  }
  goToChildUserDetail(): void {
    this.router.navigate(['detailsUser'],{ relativeTo: this.activatedRoute,queryParams:{ id: this.id }
  });
}
goTochildPost():void{
  this.router.navigate(['PostPage/'+this.id],{relativeTo:this.activatedRoute,queryParams:{ id: this.id ,}});
}

  }

