import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctor.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  searchTerm = '';

  constructor(
    private doctorsService: DoctorsService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.doctorsService.doctorsList.subscribe(doctors => {
      this.doctors = doctors;
    })
  }

  onAddDoctor() {
    this.router.navigate(['doctors-form']);
  }

  onShowProfile(idx: number) {
    this.router.navigate([idx], {relativeTo: this.route});
  }
}
