
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagensComponent } from './personagens.component';

export type APIResponse = {
info: {},
results: {},

}

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {


  API = 'https://rickandmortyapi.com/api/character'
  constructor(private httpClient: HttpClient) {}

  getList():Observable<any>{
    return this.httpClient.get<any>(this.API)
  }
}
