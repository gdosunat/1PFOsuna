import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models';
import { ConfirmationDialogComponent } from '../dialog/confirmation-dialog/confirmation-dialog.component';
import { AddNewStudentDialogComponent } from '../dialog/add-new-student-dialog/add-new-student-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  alumnos: Alumno[] = [
    new Alumno(1, "Guadalupe", "Osuna", new Date("1995-05-21"), "Femenino", "lupita@email.com"),
    new Alumno(2, "Berenice", "Apodaca", new Date("1995-11-01"), "Femenino", "bere@email.com"),
    new Alumno(3, "Liliana", "Osuna", new Date("1995-05-21"), "Femenino", "lili@email.com"),
    new Alumno(4, "Ricardo", "Ramos", new Date("1993-11-15"), "Masculino", "ricardo@email.com"),
    new Alumno(5, "Maricarmen", "Colado", new Date("1995-08-02"), "Femenino", "mari@email.com"),
    new Alumno(6, "Alison", "Arias", new Date("1995-02-06"), "Femenino", "ali@email.com"),
    new Alumno(7, "Ivan", "Osuna", new Date("1995-03-31"), "Masculino", "Ivan@email.com"),
    new Alumno(8, "Rosina", "Osuna", new Date("1995-02-23"), "Femenino", "rosii@email.com"),
    new Alumno(9, "Luis", "Tirado", new Date("1995-12-15"), "Masculino", "luis@email.com")
  ]

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'fechaNacimiento', 'sexo', 'email', 'accion'];
  dataSource = new MatTableDataSource(this.alumnos);

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(alumno:Alumno): void {
    this.alumnos.splice(this.alumnos.indexOf(alumno), 1);
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  constructor(private matDialog: MatDialog) {}

  openAddStudentDialog(){
    const dialog = this.matDialog.open(AddNewStudentDialogComponent)
  }

  openConfirmationDialog(alumno:Alumno): void{
    const dialog = this.matDialog.open(ConfirmationDialogComponent, {
      data: alumno
    })

    dialog.afterClosed().subscribe((response) =>{
      if(response == 1){
        this.onDelete(alumno);
      }
    })
  }
}
