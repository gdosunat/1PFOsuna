import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { ControlErroresPipe } from './control-errores.pipe';



@NgModule({
  declarations: [
    NombreCompletoPipe,
    ControlErroresPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NombreCompletoPipe,
    ControlErroresPipe
  ]
})
export class PipesModule { }
