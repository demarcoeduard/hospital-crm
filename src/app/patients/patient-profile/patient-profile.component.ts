import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient.model';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  id: string = '';
  patient!: Patient;

  constructor(
    private route: ActivatedRoute, 
    private patientsService: PatientsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    window.onload = () => {
      this.router.navigate(['patients']);
    }

    let idParams = this.route.snapshot.paramMap.get('id');

    if (idParams !== null) {
      this.id = idParams;
    }

    this.patient = this.patientsService.getPatient(this.id);
  }

  onEdit() {
    this.router.navigate(['patients-form', this.id]);
  }
}
