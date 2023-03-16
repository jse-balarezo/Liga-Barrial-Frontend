import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlayerModel } from '../models/player.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class PlayerHttpService {
  API_URL: string;

  constructor(private httpClient:HttpClient) {
    this.API_URL = environment.API_URL
   }

   index() {
    const url = `${this.API_URL}/players`
     return this.httpClient.get<ResponseModel>(url);
   }

   show(id: number){
    const url = `${this.API_URL}/players/${id}`
     return this.httpClient.get<ResponseModel>(url);
   }

   store(player: PlayerModel){
    const url = `${this.API_URL}/players`
    return this.httpClient.post(url, player);
  }

    update(id: number, player : PlayerModel){
    const url = `${this.API_URL}/players/${id}`
     return this.httpClient.put(url, player);
   }

   destroy(id: number){
    const url = `${this.API_URL}/players/${id}`
     return this.httpClient.delete(url);
   }
}
