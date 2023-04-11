import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent {
  @Output() values = new EventEmitter<string>();

  nombreControl = new FormControl('', [Validators.required, Validators.minLength(5)])
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(4)])
  sexoControl = new FormControl('Femenino', [Validators.required])
  emailControl = new FormControl('', [Validators.email])
  paisControl = new FormControl('', [Validators.required])

  registerForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    sexo: this.sexoControl,
    email: this.emailControl
  })

  onSubmit(): void {
    if(this.registerForm.valid && this.nombreControl.value != "" && this.apellidoControl.value != "" && this.sexoControl.value != "" && this.emailControl.value != "")
    {
      alert("enviar!")
    } else {
      alert("whops! Errores")
    }
  }
}
