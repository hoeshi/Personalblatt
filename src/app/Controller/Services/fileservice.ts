import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private files: File[] = [];

  setFiles(files: File[]): void {
    this.files = files;
  }

  getFiles(): File[] {
    return this.files;
  }

  addFiles(files: File[]): void {
    this.files.push(...files);
  }
}