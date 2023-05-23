import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // Validiert einen Textwert.
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

  // Validiert eine Postleitzahl.
  public validateZipCode(fieldName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value || /^[0-9]+$/.test(value)) {
        return null;
      } else {
        return { invalidZipCode: `${fieldName} ist ungültig. Es sind nur Zahlen erlaubt.` };
      }
    };
  }

  // Validiert eine Telefonnummer.
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

  // Validiert eine E-Mail-Adresse.
  public validateEmail(fieldName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value || !value.includes('@') || Validators.email(control) != null) {
        return { invalidEmail: `${fieldName} ist ungültig.` };
      } else {
        return null;
      }
    };
  }
  // Gibt die Fehlermeldung für ein erforderliches Feld zurück.
  public getRequiredErrorMessage(fieldName: string): string {
    return `Das Feld ${fieldName} ist erforderlich.`;
  }
  // Gibt die Fehlermeldung für eine ungültige Postleitzahl zurück.
  public getInvalidZipCodeErrorMessage(fieldName: string): string {
    return `Ungültige Postleitzahl im Feld ${fieldName}.`;
  }
  // Gibt die Fehlermeldung für eine ungültige E-Mail-Adresse zurück.
  public getInvalidEmailErrorMessage(fieldName: string): string {
    return `Ungültige E-Mail-Adresse im Feld ${fieldName}.`;
  }
  // Gibt die Fehlermeldung für eine ungültige Telefonnummer zurück.
  getInvalidPhoneNumberErrorMessage(label: string): string {
    return `${label} ist ungültig. Bitte geben Sie eine gültige Telefonnummer ein.`;
  }

}
