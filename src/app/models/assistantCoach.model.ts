import {CoachModel} from './coach.model';
export interface AssistantCoachModel{
    id?: number;
    coach?: CoachModel;
    age?: number;
    name?: string;
    nickname?: string;
    salary?: number;
    state?: boolean;
    create_at?: Date;
    update_at?: Date;
    deleted_at?: Date;
}

