import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor() { }

  handleFileUpload(file: File): void {
    console.log('File upload:', file);
  }
}