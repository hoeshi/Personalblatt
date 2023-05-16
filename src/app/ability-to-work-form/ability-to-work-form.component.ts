import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileService } from '../Controller/Services/fileservice';

@Component({
  selector: 'app-ability-to-work-form',
  templateUrl: './ability-to-work-form.component.html',
  styleUrls: ['./ability-to-work-form.component.css']
})
export class AbilityToWorkFormComponent implements OnInit {
  abilityToWorkForm: FormGroup;

  constructor(private fb: FormBuilder, private fileService: FileService) {
    this.abilityToWorkForm = this.fb.group({
      selected: ['']
    });
  }

  ngOnInit(): void {
    this.abilityToWorkForm.get('selected')!.valueChanges.subscribe(val => {
      console.log(val);
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