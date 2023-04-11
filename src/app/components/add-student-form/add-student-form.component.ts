import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent {
  nombreControl = new FormControl('', [Validators.required, Validators.minLength(5)])
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(4)])
  fechaNacimientoControl = new FormControl('', [Validators.required])
  sexoControl = new FormControl('', [Validators.required])
  emailControl = new FormControl('', [Validators.required, Validators.email])

  registerForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    fechaNacimiento: this.fechaNacimientoControl,
    sexo: this.sexoControl,
    email: this.emailControl
  })

  onSubmit(): void {
    if(this.registerForm.valid){
      console.log("Enviar form!")
    } else {
      console.log("Formuilario no valido")
    }
  }
}
