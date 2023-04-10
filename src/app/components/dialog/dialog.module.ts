import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { ConfirmationDialogComponent } from './dialogVariants/confirmation-dialog/confirmation-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
