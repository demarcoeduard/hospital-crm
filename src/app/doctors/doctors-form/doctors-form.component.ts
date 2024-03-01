import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { Doctor } from '../doctor.model';
import { Patient } from 'src/app/patients/patient.model';
import { PatientsService } from 'src/app/patients/patients.service';

@Component({
  selector: 'app-doctors-form',
  templateUrl: './doctors-form.component.html',
  styleUrls: ['./doctors-form.component.css']
})
export class DoctorsFormComponent implements OnInit {
  id: string = '';
  form!: FormGroup;
  imageUrl: string | ArrayBuffer | null | undefined;
  doctor!: Doctor;
  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(
    private router: Router, 
    private doctorsService: DoctorsService, 
    private route: ActivatedRoute,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    window.onload = () => {
      this.router.navigate(['doctors']);
    }

    this.patientsService.patientsList.subscribe(patients => {
      this.patients = patients;
    })

    this.doctorsService.doctorsList.subscribe(doctors => {
      this.doctors = doctors;
    })

    const idParams = this.route.snapshot.paramMap.get('id');
    if (idParams !== null) {
      this.id = idParams;
    }

    this.initForm();
  }

  private initForm() {
    let doctorImage: string | ArrayBuffer | undefined | null = '';
    let doctorName = '';
    let doctorProfession = '';
    let doctorSpecializations:any = new FormArray([]);
    let doctorExperience = ''; 
    let doctorEducation = '';
    let doctorCertifications:any = new FormArray([]);

    if (this.id !== '') {
      this.doctor = this.doctorsService.getDoctor(this.id);
      
      this.imageUrl = this.doctor.image;
      doctorImage = this.doctor.image;
      doctorName = this.doctor.name;
      doctorProfession = this.doctor.profession;
      doctorExperience = this.doctor.experience; 
      doctorEducation = this.doctor.education;

      this.doctor.specializations.forEach(specialization => {
        let newSpecialization = new FormControl(specialization, Validators.required);
        doctorSpecializations.push(newSpecialization);
      });
      
      this.doctor.certifications.forEach(certification => {
        let newCertification = new FormControl(certification, Validators.required);
        doctorCertifications.push(newCertification);
      })
    }

    this.form = new FormGroup({
      image: new FormControl(doctorImage, Validators.required),
      name: new FormControl(doctorName, Validators.required),
      profession: new FormControl(doctorProfession, Validators.required),
      specializations: doctorSpecializations,
      experience: new FormControl(doctorExperience, [Validators.required, Validators.min(1)]),
      education: new FormControl(doctorEducation, Validators.required),
      certifications: doctorCertifications
    })
  }

  get controlsSpecializations() {
    return (<FormArray>this.form.get('specializations')).controls;
  }

  get controlsCertifications() {
    return (<FormArray>this.form.get('certifications')).controls;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
    }

    reader.readAsDataURL(file);
  }

  onAddSpecialization(value = '') {
    (<FormArray>this.form.get('specializations')).push(
      new FormControl(value, Validators.required)
    );
  }

  onRemoveSpecialization(idx: number) {
    (<FormArray>this.form.get('specializations')).removeAt(idx);
  }

  onAddCertification() {
    (<FormArray>this.form.get('certifications')).push(
      new FormControl('', Validators.required)
    )
  }

  onRemoveCertification(idx: number) {
    (<FormArray>this.form.get('certifications')).removeAt(idx);
  }

  onCancel() {
    this.router.navigate(['doctors']);
  }

  onSubmit(doctor: Doctor) {
    const newDoctor = {...doctor, image: this.imageUrl};
    this.doctorsService.addDoctor(newDoctor);
    this.onCancel();
  }

  onEdit(doctor: Doctor) {
    const editedDoctor = {...doctor, image: this.imageUrl};
    this.doctorsService.editDoctor(this.id, editedDoctor);
    this.onCancel();
  }

  onDelete() {
    let doctorInNeed = false;
    
    this.patients.forEach(patient => {
      if (patient.doctor === this.doctor.name) {
        doctorInNeed = true;
      }
    })

    if (doctorInNeed) {
      alert('Cannot remove this doctor until you make sure no patient is in need of them');
    } else {
      this.doctorsService.deleteDoctor(this.id);
      this.onCancel();
    }
  }
}