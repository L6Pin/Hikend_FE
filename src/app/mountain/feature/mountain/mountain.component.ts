import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MountainService } from '../../data-access/mountain.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {

  mountainData: any = {}
  mountain$!: Observable<any>


  constructor(private mountainService: MountainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mountain$ = this.mountainService.getSingleMountain(this.route.snapshot.params["id"])
  }
}
