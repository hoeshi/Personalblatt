import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PdfConversionService {

  constructor() { }

  convertFormGroupsToPdf(formGroups: { name: string; data: any; }[]): jsPDF {
    const pdf = new jsPDF('p', 'mm', 'a4');

    let offsetY = 10;
    for (const formGroup of formGroups) {
      const formGroupName = formGroup.name;
      const formGroupData = formGroup.data;

      pdf.text(formGroupName, 10, offsetY);
      offsetY += 10;

      for (const key in formGroupData) {
        if (formGroupData.hasOwnProperty(key)) {
          const fieldValue = formGroupData[key];
          pdf.text(`${key}: ${fieldValue}`, 10, offsetY);
          offsetY += 10;
        }
      }

      offsetY += 10; // Fügen Sie einen Abstand zwischen den Formulargruppen hinzu
    }

    return pdf;
  }
}
