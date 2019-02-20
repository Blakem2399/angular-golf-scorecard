import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';

import {ScoreCardComponent} from './score-card/score-card.component';


const routes: Routes = [
  {
    path: '' ,
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'home',
    component: SettingsComponent
  },
  {
    path: 'game',
    component: ScoreCardComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
