import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BenefitsFormComponent } from './benefits-form/benefits-form.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { SpouseFormComponent } from './spouse-form/spouse-form.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { SideJobFormComponent } from './side-job-form/side-job-form.component';
import { BankAndInsuranceFormComponent } from './bank-and-insurance-form/bank-and-insurance-form.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { AbilityToWorkComponent } from './ability-to-work/ability-to-work.component';
import { AbilityToWorkFormComponent } from './ability-to-work-form/ability-to-work-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    BenefitsFormComponent,
    PersonalInformationFormComponent,
    SpouseFormComponent,
    ChildFormComponent,
    SideJobFormComponent,
    BankAndInsuranceFormComponent,
    AgencyFormComponent,
    AbilityToWorkComponent,
    AbilityToWorkFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
