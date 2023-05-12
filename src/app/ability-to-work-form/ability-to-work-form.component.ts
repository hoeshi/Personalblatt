import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability-to-work-form',
  templateUrl: './ability-to-work-form.component.html',
  styleUrls: ['./ability-to-work-form.component.css']
})
export class AbilityToWorkFormComponent implements OnInit {
  selected: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
