import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service.client";
import { FormsModule } from "@angular/forms";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { User } from "src/app/models/user.model.client";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  uid: string;
  oldUsername: string;
  user: User = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  userError: boolean;
  successFlag: boolean;
  constructor(
    private router: Router,
    private userservice: UserService,
    private activerouter: ActivatedRoute
  ) {}
  //Initilize the form
  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      (this.uid = params["uid"]), console.log(this.uid);
      this.userservice.findUserById(this.uid).subscribe((user: User) => {
        (this.user = user), (this.oldUsername = this.user.id);
      });
    });

    //this.userservice.findUserById()
  }
  //Update the user
  update() {
    if (this.user.id == this.oldUsername) {
      this.userservice.updateUser(this.user).subscribe((user: User) => {
        this.userError = false;
        this.successFlag = true;
      });
    } else {
      this.userservice.findUserById(this.user.id).subscribe(
        (user: User) => {
          this.userError = true;
          this.successFlag = false;
        },
        (error: any) => {
          this.userservice.updateUser(this.user).subscribe((user: User) => {
            this.userError = false;
            this.successFlag = true;
          });
        }
      );
    }
  }
}
