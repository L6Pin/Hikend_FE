import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  constructor(private http: HttpClient) { }
  

  getCities(){
    return this.http.get<any>("http://localhost:5000/hikend-bb683/us-central1/app/api/cities")
  }

}
