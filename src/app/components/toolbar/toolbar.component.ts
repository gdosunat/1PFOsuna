import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();

  menuClick(){
    this.sidebarToggle.emit(true);
  }
}
