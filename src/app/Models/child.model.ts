import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Child {
    firstName: string;
    lastName: string;
    birthDate: Date;
    school: string;
    duration: number;
  
    constructor(firstName: string, lastName: string, birthDate: Date, school: string, duration: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthDate = birthDate;
      this.school = school;
      this.duration = duration;
    }
  
    // Konvertiert eine Child-Instanz in eine FormGroup
    static toFormGroup(child: Child): FormGroup {
      return new FormGroup({
        firstName: new FormControl(child.firstName, Validators.required),
        lastName: new FormControl(child.lastName, Validators.required),
        birthDate: new FormControl(child.birthDate, Validators.required),
        school: new FormControl(child.school, Validators.required),
        duration: new FormControl(child.duration, Validators.required)
      });
    }
  }