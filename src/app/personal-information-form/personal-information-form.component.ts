import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES } from '../lists/countries';
import { permits } from '../lists/permit';
import { religions } from '../lists/religion';
import { civilstatuses } from '../lists/civilstatus';
import { PersonalInformation } from '../Models/personalInformation.model';

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

  constructor(private fb: FormBuilder) {
    
   }

   ngOnInit(): void {
    this.personalInformationForm = this.fb.group({
      gender: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      civilStatus: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      location: ['', Validators.required],
      homeTown: ['', Validators.required],
      phone: ['', Validators.required],
      finmaNumber: [''],
      ciceroNumber: [''],
      movedLastYear: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      permit: ['', Validators.required],
      previousAddress: ['', Validators.required],
      moveDate: ['', Validators.required],
    });

    this.personalInformationForm.get('nationality')!.valueChanges.subscribe(val => {
      this.selectedCountry = val;
    });
  }
}

