import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioHttpService {
  API_URL: string;

  constructor(private httpClient:HttpClient) {
    this.API_URL = environment.API_URL
   }
   index() {
    const url = `${this.API_URL}/usuarios`
     return this.httpClient.get<ResponseModel>(url);
   }

   show(id: number){
    const url = `${this.API_URL}/usuarios/${id}`
     return this.httpClient.get<ResponseModel>(url);
   }

   store(player: UsuarioModel){
    const url = `${this.API_URL}/usuarios`
    return this.httpClient.post(url, player);
  }

    update(id: number, usuario : UsuarioModel){
    const url = `${this.API_URL}/usuarios/${id}`
     return this.httpClient.put(url, usuario);
   }

   destroy(id: number){
    const url = `${this.API_URL}/usuarios/${id}`
     return this.httpClient.delete(url);
   }

   login(user:{userName : string, password : string}){
    const url = `${this.API_URL}/login`
     return this.httpClient.post(url,user);
   }
}





