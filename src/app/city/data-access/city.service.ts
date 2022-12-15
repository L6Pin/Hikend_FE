import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getSingleCity(cityId: any) {
    return this.http.get<any>(`http://localhost:5000/hikend-bb683/us-central1/app/api/city/${cityId}`)
  }
}
