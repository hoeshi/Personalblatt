import { FormGroup, FormControl } from "@angular/forms";

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
        firstName: new FormControl(child.firstName),
        lastName: new FormControl(child.lastName),
        birthDate: new FormControl(child.birthDate),
        school: new FormControl(child.school),
        duration: new FormControl(child.duration)
      });
    }
  }