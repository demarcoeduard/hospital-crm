# Hospital CRM

[![GitHub issues](https://img.shields.io/github/issues/demarcoeduard/hospital-crm.svg)](https://github.com/demarcoeduard/hospital-crm/issues)
[![GitHub forks](https://img.shields.io/github/forks/demarcoeduard/hospital-crm.svg)](https://github.com/demarcoeduard/hospital-crm/network)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/demarcoeduard/hospital-crm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Welcome to Hospital CRM! This repository contains a comprehensive CRM system designed specifically for hospital management. It facilitates the organization of appointments, doctors, and patients efficiently.

## Features

- **Appointment Management:** View and manage appointments effortlessly.
  
- **Doctor and Patient Lists:** Easily access and manipulate lists of doctors and patients.

- **Search Functionality:** Utilize advanced search capabilities to find specific appointments, doctors, or patients.

- **CRUD Operations:** Add, edit, and delete doctors and patients with ease.

- **Automatic Appointment Creation:** When adding a new patient, an appointment is automatically generated.

- **Real-time Updates:** Any changes made to patients or doctors are instantly reflected in the respective lists.

- **Integrity Checks:** Ensure data integrity by preventing the deletion of doctors assigned to patients.

- **Firebase Integration:** Seamlessly manage data with Firebase integration.

- **Fully Responsive:** Enjoy full functionality on various devices, including mobile phones and tablets.

## Getting Started

### 1. Fork the Repository

Click on the "Fork" button at the top right corner of this page.

### 2. Clone the Repository

Clone the forked repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/hospital-crm.git
```

### 3.  Navigate to the Project Directory

Navigate to the directory using the following cd command:

```bash
cd hospital-crm
```

### 4. Install Dependencies

Install project dependencies by running:

```bash
npm install
```

### 5. Run the Development Server

Start the development server with:

```bash
ng serve
```

### 6. Access the Application

Visit http://localhost:4200 in your web browser to use the application.

## Usage

- **Searching**: Utilize the search bar to filter(using the filter pipe) appointments, doctors, or patients based on the provided input (doctor/pacient name or patient's CNP).
  
- **Adding Doctors/Patients**: Click on the "Add Doctor" or "Add Patient" button and fill in the form with the required information.
  
- **Editing Doctors/Patients**: Click on the edit button inside the profile view to send you to the edit form where you can see the current data and change it with the new informations about them.
  
- **Deleting Doctors/Patients**: Click on the delete button inside the edit form view to remove the doctor/patient from the list. Note: You cannot delete a doctor if they are assigned to a patient, first assign a new doctor for that patient or delete the patient.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please submit an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
