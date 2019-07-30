import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DynamicFormFactoryService } from './dynamic-form-factory.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  public myForm: FormGroup;

  @Input() model;
  @Output() form = new EventEmitter<FormGroup>();

  constructor(private dynamicForm: DynamicFormFactoryService) { }

  ngOnInit() {
    this.myForm = this.dynamicForm.createForm(this.model);
    this.form.emit(this.myForm);
  }

}
