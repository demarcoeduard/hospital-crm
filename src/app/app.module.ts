import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorsFormComponent } from './doctors/doctors-form/doctors-form.component';
import { PatientsFormComponent } from './patients/patients-form/patients-form.component';
import { DoctorProfileComponent } from './doctors/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppointmentsComponent,
    DoctorsComponent,
    PatientsComponent,
    FilterPipe,
    DoctorsFormComponent,
    PatientsFormComponent,
    DoctorProfileComponent,
    PatientProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
