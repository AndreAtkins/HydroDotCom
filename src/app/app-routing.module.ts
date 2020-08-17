import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { SocialsComponent } from './socials/socials.component';


const routes: Routes = [
  
  {path: "", component: HomeComponent},
  {path: "music", component: MusicComponent},
  {path: "socials", component: SocialsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
