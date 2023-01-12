import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'src/app/shared/models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getSingleCity(cityId: number) {
    return this.http.get<City>(
      `http://localhost:5000/hikend-bb683/us-central1/app/api/city/${cityId}`
    );
  }
}
