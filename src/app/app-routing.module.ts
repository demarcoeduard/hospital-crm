import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsFormComponent } from './doctors/doctors-form/doctors-form.component';
import { PatientsFormComponent } from './patients/patients-form/patients-form.component';
import { DoctorProfileComponent } from './doctors/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'appointments', pathMatch: 'full'},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'doctors/:id', component: DoctorProfileComponent},
  {path: 'doctors-form', component: DoctorsFormComponent},
  {path: 'doctors-form/:id', component: DoctorsFormComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'patients/:id', component: PatientProfileComponent},
  {path: 'patients-form', component: PatientsFormComponent},
  {path: 'patients-form/:id', component: PatientsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
