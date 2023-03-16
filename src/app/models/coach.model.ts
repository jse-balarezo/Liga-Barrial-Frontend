import {TeamModel} from './team.model';
export interface CoachModel {
    id?: number;
    team?: TeamModel;
    age?: number;
    name?: string;
    nickname?: string;
    salary?: number;
    state?: boolean;
    create_at?: Date;
    update_at?: Date;
    deleted_at?: Date;
  }
 