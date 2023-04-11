import { ChangeDetectorRef, Component } from '@angular/core';
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
    new Alumno(1, "Guadalupe", "Osuna", "Femenino", "lupita@email.com", "Mexico"),
    new Alumno(2, "Berenice", "Apodaca", "Femenino", "bere@email.com", "Mexico"),
    new Alumno(3, "Liliana", "Osuna", "Femenino", "lili@email.com", "Mexico"),
    new Alumno(4, "Ricardo", "Ramos", "Masculino", "ricardo@email.com", "Mexico"),
    new Alumno(5, "Maricarmen", "Colado", "Femenino", "mari@email.com", "Mexico"),
    new Alumno(6, "Alison", "Arias", "Femenino", "ali@email.com", "Mexico"),
    new Alumno(7, "Ivan", "Osuna", "Masculino", "Ivan@email.com", "Mexico"),
    new Alumno(8, "Rosina", "Osuna", "Femenino", "rosii@email.com", "Mexico"),
    new Alumno(9, "Luis", "Tirado","Masculino", "luis@email.com", "Mexico")
  ]

  displayedColumns: string[] = ['id', 'apellido', 'sexo', 'email', 'pais', 'accion'];
  dataSource = new MatTableDataSource(this.alumnos);

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(alumno:Alumno): void {
    this.alumnos.splice(this.alumnos.indexOf(alumno), 1);
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  constructor(private matDialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {}

  alumno: Alumno = new Alumno(this.alumnos.length + 1, "", "", "Femenino", "", "")

  openAddStudentDialog(){
    const dialog = this.matDialog.open(AddNewStudentDialogComponent)

    dialog.afterClosed().subscribe((response) => {
      this.onAdd(response);
    });
  }

  openConfirmationDialog(alumno:Alumno): void{
    const dialog = this.matDialog.open(ConfirmationDialogComponent, {
      data: alumno
    })

    dialog.disableClose = true;
    dialog.afterClosed().subscribe((response) =>{
      if(response == 1){
        this.onDelete(alumno);
      }
    });
  }

  openEditStudentDialog(alumno:Alumno){
    const dialog = this.matDialog.open(AddNewStudentDialogComponent, {
      data: alumno
    })

    dialog.afterClosed().subscribe((response) => {
      this.onModify(response);
    });
  }

  onAdd(alumno: Alumno) {
    if(alumno.nombre || alumno.apellido || alumno.email || alumno.pais || alumno.sexo){
      alumno= {
        ...alumno,
          id: this.alumnos[this.alumnos.length -1].id + 1,
      }

      this.alumnos.push(alumno);
      this.dataSource = new MatTableDataSource(this.alumnos);
    }
  }

  onModify(alumno: Alumno){
    const index = this.alumnos.findIndex(al => {
      return al.id === alumno.id
    })
    this.alumnos[index] = alumno;
    
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

}
