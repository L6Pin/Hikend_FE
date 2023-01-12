import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Mountain, MountainUpdated } from '../../shared/models/mountain';

@Injectable({
  providedIn: 'root',
})
export class MountainService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getSingleMountain(mountainId: number) {
    return this.http.get<Mountain>(
      `http://localhost:5000/hikend-bb683/us-central1/app/api/mountain/${mountainId}`
    );
  }

  toggleSavedMountain(mountainId: number, mountain: Mountain) {
    const updatedMountain: MountainUpdated = {
      info: mountain.info,
      name: mountain.name,
      saved: !mountain.saved,
      hikingClubs: mountain.hikingClubs,
      yt: mountain.yt,
      photo_url: mountain.photo_url,
      routes: mountain.routes,
    };

    return this.http
      .put<MountainUpdated>(
        `http://localhost:5000/hikend-bb683/us-central1/app/api/mountain/update/${mountainId}`,
        updatedMountain
      )
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
