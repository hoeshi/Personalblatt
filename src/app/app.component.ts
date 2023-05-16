import { Component, ViewChild, ElementRef } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// @ts-ignore
import html2pdf from 'html2pdf.js';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'htmltopdf';
  
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  @ViewChild(EmployeeFormComponent) employeeFormComponent!: EmployeeFormComponent;
  
  
  public downloadAsPDF() {
    const formContainer = document.getElementById('pdfTable'); // Ersetzen Sie 'formContainer' durch die ID des Formularcontainers
  
    if (formContainer) {
      const options = {
        filename: 'Personalblatt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
  
      html2pdf().set(options).from(formContainer).save();
    }
  }
}