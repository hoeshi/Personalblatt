import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() appComponent!: AppComponent;

  constructor() {}

  ngOnInit(): void {
    // Initialisierung der appComponent-Eigenschaft mit dem übergebenen Wert
    this.appComponent = this.appComponent;
  }

  // Sendet die PDF-Anfrage an die appComponent
  send() {
    this.appComponent.FileAsPDF();
  }

}