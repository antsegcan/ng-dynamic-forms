import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormFactoryService {

  constructor() { }

  createForm(model): FormGroup {
    let res = {};
    for (const fieldset of model.fieldsets) {
      for (const control of fieldset.controls) {
        res[control.key] = new FormControl(control.value);
      }
    }
    return new FormGroup(res);
  }

}
