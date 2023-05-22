import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-side-job-form',
  templateUrl: './side-job-form.component.html',
  styleUrls: ['./side-job-form.component.css']
})
export class SideJobFormComponent implements OnInit {
  sideJobForm!: FormGroup; // Das Formular für Nebenjobs

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sideJobForm = this.fb.group({
      selected: ['', Validators.required], // Feld für die ausgewählte Option, mit Validierung erforderlich
      jobType: ['' , Validators.required] // Feld für den Jobtyp, mit Validierung erforderlich
    });
  }
}