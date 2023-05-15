import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      gender: [this.personalInformation.gender],
      firstName: [this.personalInformation.firstName],
      lastName: [this.personalInformation.lastName],
      birthDate: [this.personalInformation.birthDate],
      address: [this.personalInformation.address],
      postalCode: [this.personalInformation.postalCode],
      location: [this.personalInformation.location],
      civilStatus: [this.personalInformation.civilStatus],
      nationality: [this.personalInformation.nationality],
      religion: [this.personalInformation.religion],
      homeTown: [this.personalInformation.homeTown],
      phone: [this.personalInformation.phone],
      email: [this.personalInformation.email],
      finmaNumber: [this.personalInformation.finmaNumber],
      ciceroNumber: [this.personalInformation.ciceroNumber],
      permit: [this.personalInformation.permit],
      movedLastYear: [this.personalInformation.movedLastYear],
      previousAddress: [this.personalInformation.previousAddress],
      moveDate: [this.personalInformation.moveDate],
    });

    this.personalInformationForm.get('nationality')!.valueChanges.subscribe(val => {
      this.selectedCountry = val;
    });
  }
}

