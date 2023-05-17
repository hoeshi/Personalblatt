import { Component, ViewChild, ElementRef } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// @ts-ignore
import html2pdf from 'html2pdf.js';
import { FileService } from './Controller/Services/fileservice';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'htmltopdf';
  
  @ViewChild('pdfTable') pdfTable!: ElementRef;

  constructor(private fileService: FileService) {}
  
  
  public FileAsPDF() {
    const formContainer = document.getElementById('pdfTable');
  
    if (formContainer) {
      const options = {
        filename: 'Personalblatt.pdf',
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
  
      html2pdf().set(options).from(formContainer).save();
      this.sendPDFEmail();
      this.createZipAndDownload();
    }
  }
  
  public sendPDFEmail(): void {
    const subject = 'Personaldaten';
    const body = '';
    const recipient = 'it@neosana.ch';
  
    const emailBody = `${body}Bitte fügen Sie die folgenden heruntergeladenen Dateien als Anhänge zur E-Mail hinzu: Personalblatt.pdf`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
    window.open(mailtoLink, '_blank');
  }

  createZipAndDownload(): void {
    const files = this.fileService.getFiles();

    const zip = new JSZip();

    const filePromises: Promise<void>[] = [];

    files.forEach((file, index) => {
      const filePromise = new Promise<void>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileName = `file_${index}.${file.name.split('.').pop()}`;
          const fileData = new Uint8Array(reader.result as ArrayBuffer);
          zip.file(fileName, fileData);
          resolve();
        };

        reader.onerror = () => {
          reject(reader.error);
        };

        reader.readAsArrayBuffer(file);
      });

      filePromises.push(filePromise);
    });

    Promise.all(filePromises).then(() => {
      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, 'archive.zip');
      });
    });
  }
  

}
