import { Component, OnInit } from '@angular/core';
import { permits } from '../lists/permit';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES } from '../lists/countries';
import { religions } from '../lists/religion';
import { Spouse } from '../Models/spouse.model';
import { ValidationService } from '../Controller/Services/validation.service';
import { FileService } from '../Controller/Services/fileservice';

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

  constructor(public validationService: ValidationService, private fileService: FileService) { }

  ngOnInit(): void {
    this.spouseForm = new FormGroup({
      firstName: new FormControl(this.spouse.firstName, [Validators.required, this.validationService.validateText.bind(this.validationService, 'Vorname')]),
      lastName: new FormControl(this.spouse.lastName, [Validators.required, this.validationService.validateText.bind(this.validationService, 'Name')]),
      birthdate: new FormControl(this.spouse.birthdate, Validators.required),
      country: new FormControl(this.spouse.country, Validators.required),
      homeTown: new FormControl(this.spouse.homeTown, [Validators.required, this.validationService.validateText.bind(this.validationService, 'Heimatort')]),
      religion: new FormControl(this.spouse.religion, Validators.required),
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

  uploadFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      const fileList = Array.from(files);
      this.fileService.addFiles(fileList);
    }
  }
}