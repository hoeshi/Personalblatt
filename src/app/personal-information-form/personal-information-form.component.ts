import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES } from '../lists/countries';
import { permits } from '../lists/permit';
import { religions } from '../lists/religion';
import { civilstatuses } from '../lists/civilstatus';
import { PersonalInformation } from '../Models/personalInformation.model';
import { ValidationService } from '../Controller/Services/validation.service';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css',]
})
export class PersonalInformationFormComponent implements OnInit {
  selectedStatus: string = "";
  selected: string = "";
  selectedValue: string = "";
  selectedPermit: string = "";
  selectedCountry!: string;
  civilstatus = civilstatuses;
  countries = COUNTRIES;
  permits = permits;
  religions = religions;
  countryControl = new FormControl();
  personalInformationForm!: FormGroup;
  personalInformation: PersonalInformation = new PersonalInformation();

  constructor(private fb: FormBuilder, public validationService: ValidationService) {}


  ngOnInit(): void {
    this.personalInformationForm = this.fb.group({
      gender: ['', Validators.required],
      firstName: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Vorname')]],
      lastName: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Name')]],
      civilStatus: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Adresse')]],
      postalCode: ['', [Validators.required, this.validationService.validatePostalCode.bind(this.validationService, 'PLZ')]],
      location: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Ort')]],
      homeTown: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Heimatort')]],
      phone: ['', [Validators.required, this.validationService.validatePhoneNumber.bind(this.validationService, 'Tel.')]],
      finmaNumber: [''],
      ciceroNumber: [''],
      movedLastYear: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', [Validators.required, this.validationService.validateEmail.bind(this.validationService, 'E-Mail')]],
      permit: ['', Validators.required],
      previousAddress: ['', [Validators.required, this.validationService.validateText.bind(this.validationService, 'Zuzug von')]],
      moveDate: ['', Validators.required],
    });

    this.personalInformationForm.get('nationality')!.valueChanges.subscribe((val) => {
      this.selectedCountry = val;
    });
  }
}
