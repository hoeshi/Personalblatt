import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AGENCY_LIST } from '../lists/agency_list';
import { Agency } from '../Models/agency.model';
import { FUNCTION_LIST } from '../lists/function';
import { WorkFunction } from '../Models/function.model';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {
  agencies = AGENCY_LIST; // Liste der Agenturen
  functions = FUNCTION_LIST; // Liste der Arbeitsfunktionen
  agencyControl = new FormControl(); // Formularsteuerelement für die Auswahl der Agentur
  selectedAgency: Agency | null = null; // Ausgewählte Agentur
  selectedFunction: WorkFunction | null = null; // Ausgewählte Arbeitsfunktion
  agencyForm!: FormGroup; // Formulargruppe für das Agenturformular

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.agencyForm = this.fb.group({
      position: ['', Validators.required], // Eingabefeld für die Position (erforderlich)
      entryDate: ['', Validators.required], // Eingabefeld für das Eintrittsdatum (erforderlich)
      employmentPercentage: ['', Validators.required], // Eingabefeld für den Beschäftigungsprozentsatz (erforderlich)
      selectedAgency: ['', Validators.required] // Eingabefeld für die ausgewählte Agentur (erforderlich)
    });

    this.agencyControl.valueChanges.subscribe(val => {
      const foundAgency = this.agencies.find(a => a.name === val);
      if (foundAgency) {
        this.selectedAgency = {
          ...foundAgency,
          position: '', // Setze einen Standardwert für die fehlende Eigenschaft 'position'
        };
      }
    });
  }

  onAgencyChange(agencyName: string): void {
    const foundAgency = this.agencies.find(a => a.name === agencyName);
    if (foundAgency) {
      this.selectedAgency = {
        ...foundAgency,
        position: '', // Setze einen Standardwert für die fehlende Eigenschaft 'position'
      };
    }
  }

  onFunctionChange(functionName: string): void {
    const foundFunction = this.functions.find(f => f.name === functionName);
    if (foundFunction) {
      this.selectedFunction = foundFunction;
    }
  }
}