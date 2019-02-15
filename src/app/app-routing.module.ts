import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {OpenCloseComponent} from './open-close/open-close.component';
import {ScoreCardComponent} from './score-card/score-card.component';


const routes: Routes = [
  {
    path: '' ,
    redirectTo: '/game',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'open',
    component: OpenCloseComponent
  },
  {
    path: 'game',
    component: ScoreCardComponent
  },
  {
    path: '**',
    redirectTo: '/game'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
