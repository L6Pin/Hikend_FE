import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Mountain } from 'src/app/shared/models/mountain';
import { MountainService } from '../../data-access/mountain.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss'],
})
export class MountainComponent implements OnInit {
  mountain$!: Observable<Mountain>;
  mountainId: number = this.route.snapshot.params['id'];

  constructor(
    private mountainService: MountainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mountain$ = this.mountainService.refetch.pipe(
      switchMap(() => this.mountainService.getSingleMountain(this.mountainId))
    );
  }

  toggleSavedMountain(mountain: Mountain) {
    this.mountainService
      .toggleSavedMountain(this.mountainId, mountain)
      .subscribe();
  }
}
