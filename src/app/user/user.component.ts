import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [];
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['0000000000', [Validators.required, Validators.pattern(/(^\d{10}$)|(^\d{3}[-\.\s]\d{3}[-\.\s]\d{4}$)|(^\d{3}-\d{3}-\d{4}\s(x|(ext))\d{3,5}$)|(^\+(?:[0-9] ?){6,14}[0-9]$)|(^\(\d{3}\)-\d{3}-\d{4}$)/)]],
      address: ['', Validators.required],
    });
    this.formGroup.setValue(new User());
  }

  addUser() {
    this.submitted = true;
    if (!this.formGroup.invalid) {
      this.users.push(this.formGroup.value);
    }
  }

}

export class User {
  name = '';
  email = '';
  phone = '';
  address = '';
}
