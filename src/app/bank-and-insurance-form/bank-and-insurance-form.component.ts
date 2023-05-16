import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileService } from '../Controller/Services/fileservice';

@Component({
  selector: 'app-bank-and-insurance-form',
  templateUrl: './bank-and-insurance-form.component.html',
  styleUrls: ['./bank-and-insurance-form.component.css']
})
export class BankAndInsuranceFormComponent implements OnInit {
  bankAndInsuranceForm: FormGroup;

  constructor(private fileService: FileService) {
    this.bankAndInsuranceForm = new FormGroup({
      ahv: new FormControl('', Validators.required),
      iban: new FormControl('', Validators.required),
      bankName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
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