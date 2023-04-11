import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosComponent } from './alumnos/alumnos.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '../components/components.module';
import { DialogModule } from '@angular/cdk/dialog';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    ComponentsModule,
    MatButtonModule,
    MatDialogModule,
    DialogModule,
    SharedModule
  ],
  exports: [
    AlumnosComponent
  ]
})
export class PagesModule { }
