import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Patient[] = [];
  patientsList = new BehaviorSubject<Patient[]>([]);

  constructor(private http: HttpClient) { }

  setPatients() {
    this.http.get<Patient[]>(
      'https://hospital-crm-3ad4f-default-rtdb.firebaseio.com/patients.json'
    ).pipe(
      map(patients => {
        return patients.map(patient => {
          return {
            ...patient,
            drugs: patient.drugs ? patient.drugs : [],
            allergies: patient.allergies ? patient.allergies : [],
            operations: patient.operations ? patient.operations : [] 
          }
        })
      }),
      tap(patients => {
        this.patients = patients;
        this.patientsList.next(this.patients.slice());
      })
    ).subscribe()
  }

  addPatient(patient: Patient) {
    this.patients.push(patient);
    this.patientsList.next(this.patients.slice());
  }

  getPatient(idx: string) {
    return this.patients[+idx];
  }

  editPatient(idx: string, newPatient: Patient) {
    this.patients[+idx] = newPatient;
    this.patientsList.next(this.patients.slice());
  }

  deletePatient(idx: string) {
    this.patients.splice(+idx, 1);
    this.patientsList.next(this.patients.slice());
  }
}
