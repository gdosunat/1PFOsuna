import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';
import { AddNewStudentDialogComponent } from './dialog/add-new-student-dialog/add-new-student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ErrorDialogComponent } from './dialog/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ListComponent,
    TableComponent,
    DialogComponent,
    ConfirmationDialogComponent,
    AddNewStudentDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    SharedModule
  ],
  exports: [
    ListComponent,
    ToolbarComponent,
    TableComponent,
    DialogComponent
  ]
})
export class ComponentsModule {
 }
