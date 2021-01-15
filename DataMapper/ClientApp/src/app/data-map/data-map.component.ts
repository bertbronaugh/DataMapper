import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataMapService } from '../services/data-map.service';
import { DataMap } from '../models/datamap';

@Component({
  selector: 'app-data-map',
  templateUrl: './data-map.component.html',
  styleUrls: ['./data-map.component.scss']
})
export class DataMapComponent implements OnInit {
  dataMaps$: Observable<DataMap>;
  dataMapId: number;

  constructor(private DataMapService: DataMapService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.dataMapId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadDataMap();
  }

  loadDataMap() {
    this.dataMaps$ = this.DataMapService.getDataMap(this.dataMapId);
  }
}