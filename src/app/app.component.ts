import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormFactoryService } from './dynamic-form-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public model;
  public myForm: FormGroup;

  constructor(private dynamicForm: DynamicFormFactoryService) { }

  ngOnInit() {
    this.model = {
      name: 'Nombre de formulario',
      submit: (form) => console.log('mando el formulario'),
      fieldsets: [
        {
          legend: 'Datos de usuario',
          key: 'userData',
          controls: [
            {
              label: 'Nombre',
              type: 'text',
              key: 'name',
              value: '',
              placeholder: 'Nombre',
              required: true,
              readOnly: false,
              events: {
                input: ev => {
                  let action = ev.value === 'bloqued' ? 'disable' : 'enable';
                  const surnameCtrl = this.myForm.get('surname');
                  if (ev.value === 'bloqued') {
                    surnameCtrl.disable();
                    surnameCtrl.setValue('Me han bloqueado!');
                  } else {
                    surnameCtrl.enable();
                  }
                },
                blur: ev => { console.log('BLUR') },
                focus: ev => { console.log('FOCUS') }
              }

            }, {
              label: 'Apellidos',
              type: 'text',
              key: 'surname',
              value: '',
              placeholder: 'Apellidos',
              required: true,
              readOnly: false,
              events: {
                input: () => console.log('text has changed')
              }
            }
          ]
        }
      ]
    }

    this.myForm = this.dynamicForm.createForm(this.model);
  }


}
