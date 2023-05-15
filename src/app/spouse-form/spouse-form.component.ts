import { Component, OnInit } from '@angular/core';
import { permits } from '../lists/permit';
import { FormControl, FormGroup } from '@angular/forms';
import { COUNTRIES } from '../lists/countries';
import { religions } from '../lists/religion';
import { Spouse } from '../Models/spouse.model';

@Component({
  selector: 'app-spouse-form',
  templateUrl: './spouse-form.component.html',
  styleUrls: ['./spouse-form.component.css']
})
export class SpouseFormComponent implements OnInit {
  selectedValue: string = '';
  selected: string = '';
  selectedPermit: string = '';
  selectedCountry!: string;
  countries = COUNTRIES;
  countryControl = new FormControl();
  permits = permits;
  religions = religions;

  spouseForm!: FormGroup;
  spouse: Spouse = new Spouse();

  constructor() { }

  ngOnInit(): void {
    this.spouseForm = new FormGroup({
      firstName: new FormControl(this.spouse.firstName),
      lastName: new FormControl(this.spouse.lastName),
      birthdate: new FormControl(this.spouse.birthdate),
      country: new FormControl(this.spouse.country),
      homeTown: new FormControl(this.spouse.homeTown),
      religion: new FormControl(this.spouse.religion),
      ahv: new FormControl(this.spouse.ahv),
      permit: new FormControl(this.spouse.permit),
      employed: new FormControl(this.spouse.employed),
      employmentType: new FormControl(this.spouse.employmentType),
      employmentStartDate: new FormControl(this.spouse.employmentStartDate),
      employmentLocation: new FormControl(this.spouse.employmentLocation),
      incomeType: new FormControl(this.spouse.incomeType)
    });

    this.countryControl.valueChanges.subscribe(val => {
      this.selectedCountry = val;
    });

  }
}