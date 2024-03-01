import { Component, OnInit } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { PatientsService } from '../patients/patients.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  patients: Patient[] = [];
  searchTerm = '';

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.patientsService.patientsList.subscribe(patients => {
      this.patients = patients;
    })
  }
}