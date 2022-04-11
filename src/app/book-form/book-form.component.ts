import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookFormErrorMessages } from './book-form-error-messages';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  myForm: FormGroup;
  errors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    console.log('myForm submitted.');
    console.log('User: ' + this.myForm.value.user);
    console.log('Password: ' + this.myForm.value.password);
  }

  updateErrorMessages() {
    this.errors = {};
    console.log('updateErrorMessages');

    for (const message of BookFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      console.log('For Control: ' + message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.touched &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        console.log(
          'Error for control ' +
            message.forControl +
            ' found. Validator: ' +
            message.forValidator
        );
        this.errors[message.forControl] = message.text;
      }
    }
    console.log('this.errors.user: ' + this.errors.user);
  }
}
