import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamHttpService {
  API_URL: string;

  constructor(private httpClient:HttpClient) { 
    this.API_URL = environment.API_URL
  }
  index() {
    const url = `${this.API_URL}/teams`
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number){
    const url = `${this.API_URL}/teams/${id}`
    return this.httpClient.get<ResponseModel>(url);
  }

  store(team: TeamModel){
    const url = `${this.API_URL}/teams`
   return this.httpClient.post(url, team)
 }

  update(id: number, team : TeamModel){
    const url = `${this.API_URL}/teams/${id}`
     return this.httpClient.put(url, team);
   }

  destroy(id: number){
    const url = `${this.API_URL}/teams/${id}`
     return this.httpClient.delete(url);
   }
}
