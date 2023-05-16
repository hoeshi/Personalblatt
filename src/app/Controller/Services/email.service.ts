import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {}

  sendEmailWithAttachment(to: string, subject: string, body: string, attachmentData: Blob, attachmentName: string): void {
    // Implementieren Sie hier den Code, um die E-Mail zu versenden
    // Verwenden Sie eine E-Mail-Bibliothek oder einen E-Mail-Dienst, um die E-Mail zu senden
    // Fügen Sie das PDF als Anhang hinzu und verwenden Sie die übergebenen Parameter für Empfänger, Betreff, Text usw.
  }
}