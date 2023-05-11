import { Component, OnInit } from '@angular/core';

interface CivilStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css']
})
export class PersonalInformationFormComponent implements OnInit {
  selectedValue: string = "";

  civilstatuses: CivilStatus[] = [
    {value: 'ledig-0', viewValue: 'ledig'},
    {value: 'verheiratet-1', viewValue: 'verheiratet'},
    {value: 'geschieden-2', viewValue: 'geschieden'},
    {value: 'verwitwet-3', viewValue: 'verwitwet'},
    {value: 'konkubinat-3', viewValue: 'Konkubinat'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
