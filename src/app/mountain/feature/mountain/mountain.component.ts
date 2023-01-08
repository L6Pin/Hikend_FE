import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { MountainService } from '../../data-access/mountain.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {

  mountain$!: Observable<any>;
  mountainId: any = this.route.snapshot.params["id"];

  constructor(private mountainService: MountainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mountain$ = this.mountainService.refetch.pipe(
      switchMap(() => this.mountainService.getSingleMountain(this.mountainId))
    )
  }

  toggleSavedMountain(mountain: any) {
    this.mountainService.toggleSavedMountain(this.mountainId, mountain).subscribe()
  }
}


