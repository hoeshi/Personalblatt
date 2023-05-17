import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AGENCY_LIST } from '../lists/agency_list';
import { Agency } from '../Models/agency.model';
import { FUNCTION_LIST } from '../lists/function';
import { WorkFunction } from '../Models/function.model';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {
  agencies = AGENCY_LIST;
  functions = FUNCTION_LIST;
  agencyControl = new FormControl();
  selectedAgency: Agency | null = null;
  selectedFunction: WorkFunction | null = null;
  agencyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.agencyForm = this.fb.group({
      position: ['', Validators.required],
      entryDate: ['', Validators.required],
      employmentPercentage: ['', Validators.required],
      selectedAgency: ['', Validators.required]
    });

    this.agencyControl.valueChanges.subscribe(val => {
      const foundAgency = this.agencies.find(a => a.name === val);
      if (foundAgency) {
        this.selectedAgency = {
          ...foundAgency,
          position: '', // Set a default value for the missing property 'position'
        };
      }
    });
  }

  onAgencyChange(agencyName: string): void {
    const foundAgency = this.agencies.find(a => a.name === agencyName);
    if (foundAgency) {
      this.selectedAgency = {
        ...foundAgency,
        position: '', // Set a default value for the missing property 'position'
      };
    }
  }

  onFunctionChange(functionName: string): void {
    const foundFunction = this.functions.find(f => f.name === functionName);
    if (foundFunction) {
      this.selectedFunction = foundFunction;
    }
  }
}