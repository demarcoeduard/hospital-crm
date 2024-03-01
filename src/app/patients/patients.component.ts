import { Component, OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { PatientsService } from './patients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  searchTerm = '';

  constructor(
    private patientsService: PatientsService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.patientsService.patientsList.subscribe(patients => {
      this.patients = patients;
    })
  }

  onAddPatient() {
    this.router.navigate(['patients-form']);
  }

  onShowProfile(idx: number) {
    this.router.navigate([idx], {relativeTo: this.route});
  }
}
