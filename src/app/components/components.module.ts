import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmationDialogComponent } from './dialog/dialogVariants/confirmation-dialog/confirmation-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    ToolbarComponent,
    ListComponent,
    TableComponent
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
    DialogModule
  ],
  exports: [
    ListComponent,
    ToolbarComponent,
    TableComponent,
    DialogModule
  ]
})
export class ComponentsModule {
 }
