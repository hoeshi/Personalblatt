import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateText(fieldName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && typeof value === 'string' && value.trim() !== '') {
        return null;
      } else {
        return { invalidText: `${fieldName} ist ungültig.` };
      }
    };
  }

  public validatePostalCode(fieldName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && /^\d+$/.test(value)) {
        return null;
      } else {
        return { invalidPostalCode: `${fieldName} ist ungültig.` };
      }
    };
  }

  public validatePhoneNumber(fieldName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && /^\d+$/.test(value)) {
        return null;
      } else {
        return { invalidPhoneNumber: `${fieldName} ist ungültig.` };
      }
    };
  }

  public validateEmail(fieldName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && Validators.email(control) == null) {
        return null;
      } else {
        return { invalidEmail: `${fieldName} ist ungültig.` };
      }
    };
  }
  public getRequiredErrorMessage(fieldName: string): string {
    return `Das Feld ${fieldName} ist erforderlich.`;
  }

  public getInvalidZipErrorMessage(fieldName: string): string {
    return `Ungültige Postleitzahl im Feld ${fieldName}.`;
  }

  public getInvalidEmailErrorMessage(fieldName: string): string {
    return `Ungültige E-Mail-Adresse im Feld ${fieldName}.`;
  }

  getInvalidPhoneNumberErrorMessage(label: string): string {
    return `${label} ist ungültig. Bitte geben Sie eine gültige Telefonnummer ein.`;
  }

}