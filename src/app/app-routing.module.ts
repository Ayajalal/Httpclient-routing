import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AbousUsComponent } from './abous-us/abous-us.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UserDataComponent } from './user-data/user-data.component';
import { PostPageComponent } from './post-page/post-page.component';
import { TemplateFormComponent } from './template-form/template-form.component';
const routes: Routes = [{
  path: 'HomePage',
        component: HomePageComponent,

    },{
    path: 'about',
    component: AbousUsComponent,

},
{
  path: 'showUsers',
  component: UsersPageComponent,
},{
    path:'create',
    component:TemplateFormComponent,
  },
{
  path:'update/:id',
  component:TemplateFormComponent,
}

,
{
  path: 'UserDetail/:id',
  component:UserDetailComponent ,
  children:[{
    path:'detailsUser',
    component:UserDataComponent},
{ path:'PostPage/:id',
  component:PostPageComponent
}


]

},{path:'',redirectTo:'/HomePage',pathMatch:'full'},

{
  path: '**',
  component:PageNotfoundComponent ,

},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  router: any;

  getHomePage(){
    // this.router.navigate([HomePage,])

  }
}
