import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Alumno } from 'src/app/models';


@Component({
  selector: 'app-add-new-student-dialog',
  templateUrl: './add-new-student-dialog.component.html',
  styleUrls: ['./add-new-student-dialog.component.scss']
})
export class AddNewStudentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Alumno) { }

  nombreControl = new FormControl(this.data? this.data.nombre : '', [Validators.required, Validators.minLength(5)])
  apellidoControl = new FormControl(this.data? this.data.apellido : '', [Validators.required, Validators.minLength(4)])
  sexoControl = new FormControl(this.data? this.data.sexo : 'Femenino', [Validators.required])
  emailControl = new FormControl(this.data? this.data.email : '', [Validators.required, Validators.email])
  paisControl = new FormControl(this.data? this.data.pais : '', [Validators.required])

  registerForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    sexo: this.sexoControl,
    email: this.emailControl
  })

  submitForm(): void {

    if(this.registerForm.valid && this.nombreControl.value != "" && this.apellidoControl.value != "" && this.emailControl.value != "")
    {
      alert("enviar!")
    } else {
      alert("whops! Errores")
    }
  }

}
