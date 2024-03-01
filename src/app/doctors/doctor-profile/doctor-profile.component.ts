import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { Doctor } from '../doctor.model';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  id: string = '';
  doctor!: Doctor;

  constructor(
    private route: ActivatedRoute, 
    private doctorsService: DoctorsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    window.onload = () => {
      this.router.navigate(['doctors']);
    }

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.id = idParam;
    }

    this.doctor = this.doctorsService.getDoctor(this.id);
  }
  
  onEdit() {
    this.router.navigate(['doctors-form', this.id]);
  }
}
