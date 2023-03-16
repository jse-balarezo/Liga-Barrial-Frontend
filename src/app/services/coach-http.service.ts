import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CoachModel } from '../models/coach.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CoachHttpService {
  API_URL: string;

  constructor(private httpClient:HttpClient) { 
    this.API_URL = environment.API_URL
  }

  index() {
    const url = `${this.API_URL}/coaches`
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number){
    const url = `${this.API_URL}/coaches/${id}`
    return this.httpClient.get<ResponseModel>(url)
  }

  store(coach: CoachModel){
    const url = `${this.API_URL}/coaches`
   return this.httpClient.post<ResponseModel>(url, coach)
 }

  update(id: number, coach : CoachModel){
    const url = `${this.API_URL}/coaches/${id}`
     return this.httpClient.put<ResponseModel>(url, coach);
   }

   destroy(id: number){
    const url = `${this.API_URL}/coaches/${id}`
     return this.httpClient.delete<ResponseModel>(url);
   }
}
