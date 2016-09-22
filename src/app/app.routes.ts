import { Routes } from '@angular/router';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { MediaCmpComponent } from './media-cmp/media-cmp.component';
import { PlanningCmpComponent } from './planning-cmp/planning-cmp.component';
import { LinksCmpComponent } from './links-cmp/links-cmp.component';
import { AccessCmpComponent } from './access-cmp/access-cmp.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';

export const ROUTES: Routes = [
    { path: '', component: HomeCmpComponent },
    { path: 'accueil', component: HomeCmpComponent },
    { path: 'medias', component: MediaCmpComponent },
    { path: 'planning', component: PlanningCmpComponent },
    { path: 'liens', component: LinksCmpComponent },
    { path: 'comment-venir', component: AccessCmpComponent },
    { path: 'clothilde-kieffert', component: ProfileCmpComponent }
];
