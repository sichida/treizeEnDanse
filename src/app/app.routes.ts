import { Routes } from '@angular/router';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { MediaListComponent } from './media-list/media-list.component';
import { PlanningCmpComponent } from './planning-cmp/planning-cmp.component';
import { LinksCmpComponent } from './links-cmp/links-cmp.component';
import { AccessCmpComponent } from './access-cmp/access-cmp.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';
import { VieEcoleCmpComponent } from './vie-ecole-cmp/vie-ecole-cmp.component';
import { InfosComponent } from './infos/infos.component';

export const ROUTES: Routes = [
  { path: '', component: HomeCmpComponent },
  { path: 'accueil', component: HomeCmpComponent },
  { path: 'la-vie-de-l-ecole', component: VieEcoleCmpComponent },
  { path: 'medias', component: MediaListComponent },
  { path: 'infos-et-renseignements', component: InfosComponent },
  { path: 'planning', component: PlanningCmpComponent },
  { path: 'liens', component: LinksCmpComponent },
  { path: 'comment-venir', component: AccessCmpComponent },
  { path: 'clothilde-kieffert', component: ProfileCmpComponent }
];
