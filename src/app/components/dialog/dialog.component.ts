import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './dialogVariants/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    private dialogService: MatDialog
  ){}

  openConfirmationDialog(): void{
    this.dialogService.open(ConfirmationDialogComponent);
  }
}
