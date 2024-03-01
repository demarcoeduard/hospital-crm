import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Doctor } from 'src/app/doctors/doctor.model';
import { DoctorsService } from 'src/app/doctors/doctors.service';

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styleUrls: ['./patients-form.component.css']
})
export class PatientsFormComponent implements OnInit {
  id: string = '';
  form!: FormGroup;
  doctors: Doctor[] = [];
  patient!: Patient;

  constructor(
    private router: Router, 
    private patientsService: PatientsService, 
    private doctorsService: DoctorsService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    window.onload = () => {
      this.router.navigate(['patients']);
    }
    
    this.doctorsService.doctorsList.subscribe(doctors => {
      this.doctors = doctors;
    })

    let idParams = this.route.snapshot.paramMap.get('id');
    if (idParams !== null) {
      this.id = idParams;
    }

    this.initForm();
  }

  private initForm() {
    let patientName = '';
    let patientComplaint = '';
    let patientDoctor = '';
    let patientCnp = '';
    let patientContact = '';
    let patientAllergies:any = new FormArray([]);
    let patientDrugs:any = new FormArray([]);
    let patientOperations:any = new FormArray([]);

    if (this.id !== '') {
      this.patient = this.patientsService.getPatient(this.id);

      patientName = this.patient.name;
      patientComplaint = this.patient.complaint;
      patientDoctor = this.patient.doctor;
      patientCnp = this.patient.cnp;
      patientContact = this.patient.contact;

      this.patient.allergies?.forEach(allergy => {
        let newAllergy = new FormControl(allergy, Validators.required);
        patientAllergies.push(newAllergy);
      })

      this.patient.drugs?.forEach(drug => {
        let newDrug = new FormControl(drug, Validators.required);
        patientDrugs.push(newDrug);
      })

      this.patient.operations?.forEach(operation => {
        let newOperation = new FormControl(operation, Validators.required);
        patientOperations.push(newOperation);
      })
    }

    this.form = new FormGroup({
      name: new FormControl(patientName, Validators.required),
      complaint: new FormControl(patientComplaint, Validators.required),
      doctor: new FormControl(patientDoctor, Validators.required),
      cnp: new FormControl(patientCnp, Validators.required),
      contact: new FormControl(patientContact, Validators.required),
      allergies: patientAllergies,
      drugs: patientDrugs,
      operations: patientOperations
    })
  }

  get controlsAllergies() {
    return (<FormArray>this.form.get('allergies')).controls;
  }

  get controlsDrugs() {
    return (<FormArray>this.form.get('drugs')).controls;
  }

  get controlsOperations() {
    return (<FormArray>this.form.get('operations')).controls;
  }


  onAddAllergy() {
    (<FormArray>this.form.get('allergies')).push(
      new FormControl('', Validators.required)
    )
  }

  onRemoveAllergy(idx: number) {
    (<FormArray>this.form.get('allergies')).removeAt(idx);
  }

  onAddDrug() {
    (<FormArray>this.form.get('drugs')).push(
      new FormControl('', Validators.required)
    )
  }

  onRemoveDrug(idx: number) {
    (<FormArray>this.form.get('drugs')).removeAt(idx);
  }

  onAddOperation() {
    (<FormArray>this.form.get('operations')).push(
      new FormControl('', Validators.required)
    )
  }
  
  onRemoveOperation(idx: number) {
    (<FormArray>this.form.get('operations')).removeAt(idx);
  }


  onCancel() {
    this.router.navigate(['patients']);
  }

  onSubmit(patient: Patient) {
    this.patientsService.addPatient(patient);
    this.onCancel();
  }

  onEdit(newPatient: Patient) {
    this.patientsService.editPatient(this.id, newPatient);
    this.onCancel();
  }

  onDelete() {
    this.patientsService.deletePatient(this.id);
    this.onCancel();
  }
}
