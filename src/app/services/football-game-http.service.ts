import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FootballGameModel } from '../models/footballGame.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class FootballGameHttpService {
  API_URL: string;

  constructor(private httpClient:HttpClient) {    
    this.API_URL = environment.API_URL 
  }
  index() {
    const url = `${this.API_URL}/football-games`
    return this.httpClient.get<ResponseModel>(url)
  }

  show(id: number){
    const url = `${this.API_URL}/football-games/${id}`
    return this.httpClient.get<ResponseModel>(url)
  }

  store(footballGame: FootballGameModel){
    const url = `${this.API_URL}/football-games`
   return this.httpClient.post(url, footballGame)
 }

  update(id: number, footballGame : FootballGameModel){
    const url = `${this.API_URL}/football-games/${id}`
     return this.httpClient.put(url, footballGame);
   }

   destroy(id: number){
    const url = `${this.API_URL}/football-games/${id}`
     return this.httpClient.delete(url);
   }
}
