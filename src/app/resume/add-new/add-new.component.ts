import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss'
})
export class AddNewComponent implements OnInit {
  resumeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form fields as needed
    });
  }

  onSubmit() {
    // Handle form submission logic here
  }
}

