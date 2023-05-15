import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ability-to-work-form',
  templateUrl: './ability-to-work-form.component.html',
  styleUrls: ['./ability-to-work-form.component.css']
})
export class AbilityToWorkFormComponent implements OnInit {
  abilityToWorkForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.abilityToWorkForm = this.fb.group({
      selected: ['']
    });
  }

  ngOnInit(): void {
    this.abilityToWorkForm.get('selected')!.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
}