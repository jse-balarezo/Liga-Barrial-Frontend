import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {CoachComponent} from './coach/coach.component';
import {AssistantCoachComponent} from './assistant-coach/assistant-coach.component';
import { FootballGameComponent } from './football-game/football-game.component';
import { TeamComponent } from './team/team.component';
import { MenuPresidenteComponent } from './menu-presidente/menu-presidente.component';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {path: 'player', component: PlayerComponent},
  {path: 'coach', component: CoachComponent},
  {path: 'assistant-coach', component: AssistantCoachComponent},
  {path: 'football-game', component: FootballGameComponent},
  {path: 'team', component: TeamComponent},
  {path: 'menu-presidente', component: MenuPresidenteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu-admin', component: MenuAdminComponent},
  {path: 'usuario', component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
