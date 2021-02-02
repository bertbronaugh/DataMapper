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

  // My fields
  dataMapId: number;
  formCustno: number;
  formState: string;
  formTable: string;
  formData1Value: string;
  formData1Description: string;
  formDataIntValue: number;
  formData2Value: string;
  formData2Description: string;
  created: Date;
  updated: Date;

  // Old fields
  // formTitle: string;
  // formBody: string;
  // postId: number;

  errorMessage: any;
  existingDataMap: DataMap;

  constructor(private DataMapService: DataMapService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formCustno = 9999;
    this.formState = 'TX';
    this.formTable = 'table';
    this.formData1Value = 'data1Value';
    this.formData1Description = '';
    this.formDataIntValue = 0;
    this.formData2Value = 'data2Value';
    this.formData2Description = ''
    // this.formTitle = 'title';
    // this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.dataMapId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        dataMapId: 0,
        formCustno: [99, [Validators.required, Validators.minLength(4)]],
        formState: ['', [Validators.required]],
        formTable: ['', [Validators.required]],
        formData1Value: ['', [Validators.required]],
        formData1Description: [''], // took away [Validators] to see if that fixes loading
        formDataIntValue: [0, [Validators.required]],
        formData2Value: ['', [Validators.required]],
        formData2Description: ['']
        // title: ['', [Validators.required]],
        // body: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {

    if (this.dataMapId > 0) {
      this.actionType = 'Edit';
      this.DataMapService.getDataMap(this.dataMapId)
        .subscribe(data => (
          this.existingDataMap = data,
          this.form.controls['formCustno'].setValue(data.custno),
          this.form.controls['formState'].setValue(data.state),
          this.form.controls['formTable'].setValue(data.table),
          this.form.controls['formData1Value'].setValue(data.data1Value),
          this.form.controls['formData1Description'].setValue(data.data1Description),
          this.form.controls['formDataIntValue'].setValue(data.dataIntValue),
          this.form.controls['formData2Value'].setValue(data.data2Value),
          this.form.controls['formData2Description'].setValue(data.data2Description)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let dataMap: DataMap = {
        created: new Date(),
        updated: new Date(),
        custno: this.form.get('formCustno').value,
        state: this.form.get('formState').value,
        table: this.form.get('formTable').value,
        data1Value: this.form.get('formData1Value').value,
        data1Description: this.form.get('formData1Description').value,
        dataIntValue: this.form.get('formDataIntValue').value,
        data2Value: this.form.get('formData2Value').value,
        data2Description: this.form.get('formData2Description').value

        // dt: new Date(),
        // creator: 'Martin',
        // title: this.form.get(this.formTitle).value,
        // body: this.form.get(this.formBody).value
      };

      this.DataMapService.saveDataMap(dataMap)
        .subscribe((data) => {
          this.router.navigate(['/datamap', data.dataMapId]);
        });
    }

    if (this.actionType === 'Edit') {
      let dataMap: DataMap = {
        dataMapId: this.existingDataMap.dataMapId,
        created: this.existingDataMap.created,
        updated: new Date(),
        
        custno: this.form.get('formCustno').value,
        state: this.form.get('formState').value,
        table: this.form.get('formTable').value,
        data1Value: this.form.get('formData1Value').value,
        data1Description: this.form.get('formData1Description').value,
        dataIntValue: this.form.get('formDataIntValue').value,
        data2Value: this.form.get('formData2Value').value,
        data2Description: this.form.get('formData2Description').value
        // postId: this.existingDataMap.postId,
        // dt: this.existingDataMap.dt,
        // creator: this.existingDataMap.creator,
        // title: this.form.get(this.formTitle).value,
        // body: this.form.get(this.formBody).value
      };
      this.DataMapService.updateDataMap(dataMap.dataMapId, dataMap)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get custno() { return this.form.get('formCustno'); }
  get state() { return this.form.get('formState'); }
  get table() { return this.form.get('formTable'); }
  get data1Value() { return this.form.get('formData1Value'); }
  get data1Description() { return this.form.get('formData1Description'); }
  get dataIntValue() { return this.form.get('formDataIntValue'); }
  get data2Value() { return this.form.get('formData2Value'); }
  get data2Description() { return this.form.get('formData2Description'); }

}