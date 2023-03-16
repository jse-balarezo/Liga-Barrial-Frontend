import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AssistantCoachModel } from '../models/assistantCoach.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AssistantCoachHttpService {
  API_URL: string;

  constructor(private httpClient:HttpClient) {
    this.API_URL = environment.API_URL
   }

   index() {
    const url = `${this.API_URL}/assistant-coaches`
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number){
    const url =`${this.API_URL}/assistant-coaches/${id}`
    return this.httpClient.get<ResponseModel>(url)
  }

  store(assistantCoach: AssistantCoachModel){
    const url =`${this.API_URL}/assistant-coaches`
   return this.httpClient.post(url, assistantCoach)
 }

   update(id: number, assistantCoach : AssistantCoachModel){
    const url = `${this.API_URL}/assistant-coaches/${id}`
     return this.httpClient.put(url, assistantCoach);
   }

   destroy(id: number){
    const url = `${this.API_URL}/assistant-coaches/${id}`
     return this.httpClient.delete(url);
   }
}
