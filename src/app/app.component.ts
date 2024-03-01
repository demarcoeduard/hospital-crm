import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors/doctors.service';
import { PatientsService } from './patients/patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.doctorsService.setDoctors();
    this.patientsService.setPatients();
  }
}