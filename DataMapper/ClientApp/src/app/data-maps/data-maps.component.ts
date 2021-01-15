import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataMapService } from '../services/data-map.service';
import { DataMap } from '../models/datamap';

@Component({
  selector: 'app-data-maps',
  templateUrl: './data-maps.component.html',
  styleUrls: ['./data-maps.component.scss']
})
export class DataMapsComponent implements OnInit {
  dataMaps$: Observable<DataMap[]>;

  constructor(private DataMapService: DataMapService) {
  }

  ngOnInit() {
    this.loadDataMaps();
  }

  loadDataMaps() {
    this.dataMaps$ = this.DataMapService.getDataMaps();
  }

  delete(dataMapID) {
    const ans = confirm('Do you want to delete data map with id: ' + dataMapID);
    if (ans) {
      this.DataMapService.deleteDataMap(dataMapID).subscribe((data) => {
        this.loadDataMaps();
      });
    }
  }
}