import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bank-and-insurance-form',
  templateUrl: './bank-and-insurance-form.component.html',
  styleUrls: ['./bank-and-insurance-form.component.css']
})
export class BankAndInsuranceFormComponent implements OnInit {
  bankAndInsuranceForm: FormGroup;

  constructor() {
    this.bankAndInsuranceForm = new FormGroup({
      ahv: new FormControl(''),
      iban: new FormControl(''),
      bankName: new FormControl(''),
      address: new FormControl(''),
      zipCode: new FormControl(''),
      location: new FormControl(''),
      salary: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
}

export class BankAndInsurance {
    constructor() {
    
    }
}