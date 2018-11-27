import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service.client";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { User } from "src/app/models/user.model.client";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private userservice: UserService, private router: Router) {}
  error_flag = false;
  username = "";
  password = "";

  ngOnInit() {
    this.error_flag = false;
  }
  login() {
    this.userservice
      .findUserByCredentials(this.username, this.password)
      .subscribe(
        (user: User) => {
          //console.log(user);
          this.router.navigate(["/user/" + user.id]);
        },
        (error: any) => {
          this.error_flag = true;
        }
      );
  }
}
