import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Alumno } from '../../models/Alumno';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    private dialogService: MatDialog
  ){}

  @Input("alumno") alumno: Alumno = new Alumno(0, "","",new Date(),"Femenino","");
  @Output() deleteStudent = new EventEmitter<Alumno>();
  openConfirmationDialog(): void{
    let dialogRef = this.dialogService.open(ConfirmationDialogComponent, {
      data: this.alumno
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == "1"){
        this.deleteStudent.emit(this.alumno);
      }
    })
  }
}
