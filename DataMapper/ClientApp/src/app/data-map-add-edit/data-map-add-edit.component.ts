import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataMapService } from '../services/data-map.service';
import { DataMap } from '../models/datamap';

@Component({
  selector: 'app-data-map-add-edit',
  templateUrl: './data-map-add-edit.component.html',
  styleUrls: ['./data-map-add-edit.component.scss']
})
export class DataMapAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  postId: number;
  errorMessage: any;
  existingDataMap: DataMap;

  constructor(private DataMapService: DataMapService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formTitle = 'title';
    this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        title: ['', [Validators.required]],
        body: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {

    if (this.postId > 0) {
      this.actionType = 'Edit';
      this.DataMapService.getDataMap(this.postId)
        .subscribe(data => (
          this.existingDataMap = data,
          this.form.controls[this.formTitle].setValue(data.title),
          this.form.controls[this.formBody].setValue(data.body)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let dataMap: DataMap = {
        dt: new Date(),
        creator: 'Martin',
        title: this.form.get(this.formTitle).value,
        body: this.form.get(this.formBody).value
      };

      this.DataMapService.saveDataMap(dataMap)
        .subscribe((data) => {
          this.router.navigate(['/blogpost', data.postId]);
        });
    }

    if (this.actionType === 'Edit') {
      let dataMap: DataMap = {
        postId: this.existingDataMap.postId,
        dt: this.existingDataMap.dt,
        creator: this.existingDataMap.creator,
        title: this.form.get(this.formTitle).value,
        body: this.form.get(this.formBody).value
      };
      this.DataMapService.updateDataMap(dataMap.postId, dataMap)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get title() { return this.form.get(this.formTitle); }
  get body() { return this.form.get(this.formBody); }
}