import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AbousUsComponent } from './abous-us/abous-us.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UserDataComponent } from './user-data/user-data.component';
import { PostPageComponent } from './post-page/post-page.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AbousUsComponent,
    UsersPageComponent,
    UserDetailComponent,
    PageNotfoundComponent,
    UserDataComponent,
    PostPageComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
