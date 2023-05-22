import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileService } from '../Controller/Services/fileservice';

@Component({
  selector: 'app-ability-to-work-form',
  templateUrl: './ability-to-work-form.component.html',
  styleUrls: ['./ability-to-work-form.component.css']
})
export class AbilityToWorkFormComponent implements OnInit {
  abilityToWorkForm: FormGroup; // Formulargruppe für das Formular zur Arbeitsfähigkeit

  constructor(private fb: FormBuilder, private fileService: FileService) {
    // Initialisierung des Formulars
    this.abilityToWorkForm = this.fb.group({
      selected: [''] // Eingabefeld für die Auswahl (Standardwert: leer)
    });
  }

  ngOnInit(): void {
    // Reaktion auf Änderungen des Eingabefelds 'selected'
    this.abilityToWorkForm.get('selected')!.valueChanges.subscribe(val => {
      console.log(val); // Ausgabe der aktuellen Auswahl in der Konsole
    });
  }

  uploadFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      const fileList = Array.from(files);
      this.fileService.addFiles(fileList); // Hochladen der ausgewählten Dateien mithilfe des FileService
    }
  }
}