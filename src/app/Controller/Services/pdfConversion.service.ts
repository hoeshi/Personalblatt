import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfConversionService {
  constructor() {}

  convertElementToPdf(element: HTMLElement): Promise<jsPDF> {
    return new Promise<jsPDF>((resolve, reject) => {
      html2canvas(element).then(canvas => {
        const contentWidth = canvas.width / 3;
        const contentHeight = canvas.height / 3;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;

        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, contentWidth, contentHeight);
        resolve(pdf);
      }, error => {
        reject(error);
      });
    });
  }
}