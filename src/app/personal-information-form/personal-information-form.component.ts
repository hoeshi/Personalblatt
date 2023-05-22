import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES } from '../lists/countries'; // Import der Liste der Länder
import { permits } from '../lists/permit'; // Import der Liste der Erlaubnisse
import { religions } from '../lists/religion'; // Import der Liste der Religionen
import { civilstatuses } from '../lists/civilstatus'; // Import der Liste der Zivilstände
import { PersonalInformation } from '../Models/personalInformation.model'; // Import des Modells für persönliche Informationen
import { ValidationService } from '../Controller/Services/validation.service'; // Import des Validierungsdienstes
import { FileService } from '../Controller/Services/fileservice'; // Import des Dateidienstes


@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css',]
})
export class PersonalInformationFormComponent implements OnInit {
  selectedStatus: string = ""; // Variable für den ausgewählten Status
  selected: string = ""; // Variable für die allgemeine Auswahl
  selectedValue: string = ""; // Variable für den ausgewählten Wert
  selectedPermit: string = ""; // Variable für die ausgewählte Erlaubnis
  selectedCountry!: string; // Variable für das ausgewählte Land (mit dem "!"-Operator wird angezeigt, dass es anfangs undefiniert sein kann)
  civilstatus = civilstatuses; // Array der Zivilstände
  countries = COUNTRIES; // Array der Länder
  permits = permits; // Array der Erlaubnisse
  religions = religions; // Array der Religionen
  countryControl = new FormControl(); // Formularelement zur Auswahl des Landes
  personalInformationForm!: FormGroup; // Das Formular für persönliche Informationen
  personalInformation: PersonalInformation = new PersonalInformation(); // Das Modell für persönliche Informationen

  constructor(private fb: FormBuilder, public validationService: ValidationService, private fileService: FileService) {}


  ngOnInit(): void {
    this.personalInformationForm = this.fb.group({
      // Initialisierung des Formulars für persönliche Informationen mit Validatoren
      gender: ['', Validators.required],
      firstName: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Vorname')]],
      lastName: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Name')]],
      civilStatus: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Adresse')]],
      zipCode: new FormControl('', [Validators.required, this.validationService.validateZipCode('PLZ')]),
      location: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Ort')]],
      homeTown: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Heimatort')]],
      phone: ['', [Validators.required, this.validationService.validatePhoneNumber.bind(this.validationService, 'Tel.')]],
      finmaNumber: [''],
      ciceroNumber: [''],
      movedLastYear: ['', Validators.required],
      religion: ['', Validators.required],
      email: new FormControl('', [Validators.required, this.validationService.validateEmail('PLZ')]),
      permit: ['', Validators.required],
      previousAddress: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Zuzug von')]],
      moveDate: ['', Validators.required],
    });
  
    // Abonnieren von Änderungen des Werts der Nationalität
    this.personalInformationForm.get('nationality')!.valueChanges.subscribe((val) => {
      this.selectedCountry = val; // Aktualisieren der ausgewählten Nationalität
    });
  }

uploadFiles(event: Event): void {
  const input = event.target as HTMLInputElement;
  const files = input.files;
  if (files) {
    const fileList = Array.from(files);
    this.fileService.addFiles(fileList); // Hinzufügen der hochgeladenen Dateien zum Dateidienst
  }
}
}