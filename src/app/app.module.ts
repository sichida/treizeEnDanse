import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderCmpComponent } from './header-cmp/header-cmp.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { MediaCmpComponent } from './media-cmp/media-cmp.component';
import { PlanningCmpComponent } from './planning-cmp/planning-cmp.component';
import { LinksCmpComponent } from './links-cmp/links-cmp.component';
import { AccessCmpComponent } from './access-cmp/access-cmp.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCmpComponent,
    MenuCmpComponent,
    HomeCmpComponent,
    MediaCmpComponent,
    PlanningCmpComponent,
    LinksCmpComponent,
    AccessCmpComponent,
    ProfileCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
