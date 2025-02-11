import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NewPostComponent } from './new-post/new-post.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'addPost', component: NewPostComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];