export interface FootballGameModel {
  id? : number;
  date?: Date;
  loser?: string;
  number_matches?: number;
  penalties?: boolean;
  winner?: string;
  tied?: boolean;
  create_at?: Date;
  update_at?: Date;
  deleted_at?: Date;
}
