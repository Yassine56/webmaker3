import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { UserService } from "src/app/services/user.service.client";
import { Router } from "@angular/router";
import { NgModule } from "@angular/core";
import { concat } from "rxjs";
import { User } from "src/app/models/user.model.client";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user_error: boolean;
  pwd_error: boolean;
  register_Form: FormGroup;
  submitted = false;

  constructor(
    private userservice: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.register_Form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      verifPassword: ["", Validators.required]
    });
  }
  get f() {
    return this.register_Form.controls;
  }
  register() {
    this.submitted = true;
    //console.log(this.register_Form.value);
    if (this.register_Form.invalid) {
      return;
    }
    const username = this.register_Form.value["username"];
    const password = this.register_Form.value["password"];
    const verifPassword = this.register_Form.value["verifPassword"];

    if (password === verifPassword) {
      //const user: User = this.userservice.findUserByUsername(username);
      this.userservice.findUserByUsername(username).subscribe(
        (user: User) => {
          this.user_error = true;
          this.pwd_error = false;
        },
        (create: any) => {
          let newUser = {
            username: username,
            password: password,
            verifPassword: verifPassword
          };
          this.user_error = false;
          this.userservice.createUser(newUser).subscribe((user: User) => {
            this.router.navigate(["user", user.id]);
          });
        }
      );
    } else {
      this.pwd_error = true;
      this.user_error = false;
    }
  }
}
