import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-benefits-form',
  templateUrl: './benefits-form.component.html',
  styleUrls: ['./benefits-form.component.css']
})
export class BenefitsFormComponent implements OnInit {
  benefitsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisierung des benefitsForm-Formulars mithilfe des FormBuilder
    this.benefitsForm = this.fb.group({
      selected: [''] // Erzeugung eines Formularelements "selected" mit anfänglichem Wert ''
    });
  }

  ngOnInit(): void {
    // Leer, da keine spezifische Initialisierungslogik benötigt wird
  }
}