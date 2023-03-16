import {TeamModel} from './team.model';
export interface PlayerModel {
  id?: number;
  team?: TeamModel;
  age?: number;
  name?: string;
  nickname?: string;
  player_position?: string;
  salary?: number;
  state?: boolean;
  create_at?: Date;
  update_at?: Date;
  deleted_at?: Date;
}
