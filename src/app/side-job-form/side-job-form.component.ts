import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-side-job-form',
  templateUrl: './side-job-form.component.html',
  styleUrls: ['./side-job-form.component.css']
})
export class SideJobFormComponent implements OnInit {
  sideJobForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sideJobForm = this.fb.group({
      selected: [''],
      jobType: ['']
    });
  }
}