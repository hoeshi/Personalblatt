import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PdfConversionService } from '../Controller/Services/pdfConversion.service';
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
    this.appComponent = this.appComponent;
    
  }

}