import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['Harry', Validators.required],
    password: [''],
    confrimPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    })
  });

  ngOnInit(): void {
  }

}
