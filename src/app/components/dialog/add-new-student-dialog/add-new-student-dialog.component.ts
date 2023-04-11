import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


@Component({
  selector: 'app-add-new-student-dialog',
  templateUrl: './add-new-student-dialog.component.html',
  styleUrls: ['./add-new-student-dialog.component.scss']
})
export class AddNewStudentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Alumno,  private dialogRef: MatDialogRef<AddNewStudentDialogComponent>, private matDialog: MatDialog) { }

  isNewRecord = !this.data;

  nombreControl = new FormControl(!this.isNewRecord ? this.data.nombre : '', [Validators.required, Validators.minLength(5)])
  apellidoControl = new FormControl(!this.isNewRecord ? this.data.apellido : '', [Validators.required, Validators.minLength(4)])
  sexoControl = new FormControl(!this.isNewRecord ? this.data.sexo : 'Femenino', [Validators.required])
  emailControl = new FormControl(!this.isNewRecord ? this.data.email : '', [Validators.required, Validators.email])
  paisControl = new FormControl(!this.isNewRecord ? this.data.pais : '', [Validators.required])

  registerForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    sexo: this.sexoControl,
    email: this.emailControl,
    pais: this.paisControl
  })

  submitForm(): void {

    if(this.registerForm.valid && this.nombreControl.value != "" && this.apellidoControl.value != "" && this.emailControl.value != ""){
      const newAlumno = {
        ...this.data,
        id: this.data ? this.data.id : undefined,
        nombre: this.nombreControl.value,
        apellido: this.apellidoControl.value,
        sexo: this.sexoControl.value,
        email: this.emailControl.value,
        pais: this.paisControl.value
      };

      this.dialogRef.close(newAlumno);

    } else {
        const dialog = this.matDialog.open(ErrorDialogComponent)
      }
  }

  close(){
    this.dialogRef.close();
  }

}
