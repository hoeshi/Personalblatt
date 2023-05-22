import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileService } from '../Controller/Services/fileservice';

@Component({
  selector: 'app-bank-and-insurance-form',
  templateUrl: './bank-and-insurance-form.component.html',
  styleUrls: ['./bank-and-insurance-form.component.css']
})
export class BankAndInsuranceFormComponent implements OnInit {
  bankAndInsuranceForm: FormGroup;

  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fileService: FileService) {
    // Initialisierung des bankAndInsuranceForm-Formulars
    this.bankAndInsuranceForm = new FormGroup({
      ahv: new FormControl('', Validators.required), // Formularelement für AHV mit erforderlicher Validierung
      iban: new FormControl('', Validators.required), // Formularelement für IBAN mit erforderlicher Validierung
      bankName: new FormControl('', Validators.required), // Formularelement für Bankname mit erforderlicher Validierung
      address: new FormControl('', Validators.required), // Formularelement für Adresse mit erforderlicher Validierung
      zipCode: new FormControl('', Validators.required), // Formularelement für Postleitzahl mit erforderlicher Validierung
      location: new FormControl('', Validators.required), // Formularelement für Ort mit erforderlicher Validierung
      salary: new FormControl('', Validators.required) // Formularelement für Gehalt mit erforderlicher Validierung
    });
  }

  ngOnInit(): void {
    // Leer, da keine spezifische Initialisierungslogik benötigt wird
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