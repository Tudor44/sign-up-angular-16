import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControlOptions, AbstractControl, FormBuilder, FormGroup, FormControl, Validators, ValidatorFn  } from '@angular/forms';
import { SignupFormService } from '../service/signup-form.service';
import { PhotoResponse } from '../model/photo-response.model';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  
  @Output() fullNameEvent = new EventEmitter<any>();

  fullName : string = '';

  constructor(private formBuilder: FormBuilder, private signupFormService: SignupFormService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: [
          '', 
          Validators.required],
        lastName: [
          '', 
          Validators.required],
        email: [
          '', [
          Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ]
      },
      {
        validators: [ this.checkPassword("password","firstName","lastName") ]
      } as AbstractControlOptions
    );
    this.form.valueChanges.subscribe(val => {
      this.fullName = `${val.firstName} ${val.lastName}`;
      this.fullNameEvent.emit(this.fullName);
    });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.signupFormService.callService(this.form.value).subscribe({
      next : response => {
       console.log("Second response");
       console.log(response);
      },
      error : error => {
        console.log(error);
      }
    });
  }

  checkPassword(password: string, firstName: string, lastName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const passwordC = controls.get(password)?.value;
      const firstNameC = controls.get(firstName)?.value;
      const lastNameC = controls.get(lastName)?.value;

      const hasUpperCase = /[A-Z]/.test(passwordC);
      const hasLowerCase = /[a-z]/.test(passwordC);

      const hasFirstName = new RegExp(firstNameC, 'i').test(passwordC);
      const hasLastName = new RegExp(lastNameC, 'i').test(passwordC);

      if (!hasUpperCase || !hasLowerCase || hasFirstName || hasLastName) {
        controls.get(password)?.setErrors({ passwordError: true });
        return { passwordError: true };
      } else 
        return null;
      
    };
  }
}
