import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityMountains } from 'src/app/shared/models/city';

@Injectable({
  providedIn: 'root'
})
export class SavedMountainsService {

  constructor(private http: HttpClient) { }

  getSavedMountains() {
    return this.http.get<CityMountains[]>("http://localhost:5000/hikend-bb683/us-central1/app/api/saved")
  }

}
