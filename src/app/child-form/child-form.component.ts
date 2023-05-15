import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Child } from '../Models/child.model';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent {

  childCount = 1;
  selectedChild = 'no';
  childForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.childForm = this.fb.group({
      children: this.fb.array([])
    });

    this.addChild();
  }

  get children() {
    return this.childForm.get('children') as FormArray;
  }

  increment() {
    if (this.childCount < 8) {
    this.childCount++;
    this.addChild();
    }
    
  }
  
  decrement() {
    if (this.childCount > 1) {
      this.childCount--;
      this.children.removeAt(this.childCount);
    }
  }

  addChild() {
    if (this.childCount < 9) {
      this.children.push(Child.toFormGroup(new Child('', '', new Date(), '', 0)));
    }
  } 
}