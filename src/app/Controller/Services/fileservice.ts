import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FileService {
  private files: File[] = []; // Privates Array zur Speicherung von Dateien

  // Gibt die im Service gespeicherten Dateien zurück.
  getFiles(): File[] {
    return this.files;
  }

  // Fügt dem Service Dateien hinzu.
  addFiles(files: File[]): void {
    this.files.push(...files);
  }
}