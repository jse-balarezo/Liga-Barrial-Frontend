import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {PagesRoutingModule} from './pages-routing.module';
import { PlayerComponent } from './player/player.component';
import { CoachComponent } from './coach/coach.component';
import { AssistantCoachComponent } from './assistant-coach/assistant-coach.component';
import { TeamComponent } from './team/team.component';
import { FootballGameComponent } from './football-game/football-game.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {Dropdown, DropdownModule} from 'primeng/dropdown'
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuPresidenteComponent } from './menu-presidente/menu-presidente.component';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { UsuarioComponent } from './usuario/usuario.component';


// PrimeNg Modules


@NgModule({
  declarations: [
    PlayerComponent,
    CoachComponent,
    AssistantCoachComponent,
    TeamComponent,
    FootballGameComponent,
    MenuPresidenteComponent,
    LoginComponent,
    MenuAdminComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    DropdownModule,
    InputSwitchModule

  ]
})

export class PagesModule { }
