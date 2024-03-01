import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private doctors: Doctor[] = [];
  doctorsList = new BehaviorSubject<Doctor[]>([]);
  doctor = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  setDoctors() {
    this.http.get<Doctor[]>(
      'https://hospital-crm-3ad4f-default-rtdb.firebaseio.com/doctors.json'
    ).subscribe(doctors => {
      this.doctors = doctors;
      this.doctorsList.next(this.doctors.slice());
    })
  }

  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
    this.doctorsList.next(this.doctors.slice());
  }

  getDoctor(idx: string) {
    return this.doctors[+idx];
  }

  editDoctor(idx: string, newDoctor: Doctor) {
    this.doctors[+idx] = newDoctor;
    this.doctorsList.next(this.doctors.slice());
  }

  deleteDoctor(idx: string) {
    this.doctors.splice(+idx, 1);
    this.doctorsList.next(this.doctors.slice());
  }
}
