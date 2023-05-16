import { Component, ViewChild, ElementRef } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// @ts-ignore
import html2pdf from 'html2pdf.js';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'htmltopdf';
  
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  
  
  public createPDF(): void {
    const formContainer = this.pdfTable.nativeElement;
  
    if (formContainer) {
      const options = {
        filename: 'Personalblatt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
  
      html2pdf().set(options).from(formContainer).then((pdf: any) => {
        this.sendPDFEmail(pdf);
      });
    }
  }
  public sendPDFEmail(pdf: any): void {
    const subject = 'Personaldaten';
    const body = '';
    const recipient = 'it@neosana.ch';
  
    const emailBody = `${body}Bitte fügen Sie die folgenden heruntergeladenen Dateien als Anhänge zur E-Mail hinzu: Personalblatt.pdf`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
    window.open(mailtoLink, '_blank');
  }
}


