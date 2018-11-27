import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { Website } from "src/app/models/website.model.client";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

@Component({
  selector: "app-website-new",
  templateUrl: "./website-new.component.html",
  styleUrls: ["./website-new.component.css"]
})
export class WebsiteNewComponent implements OnInit {
  uid: string;
  websites;
  name: string;
  description: string;
  submitted = false;
  error_name: boolean;
  error_desc: boolean;

  constructor(
    private websiteservice: WebsiteService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]),
        (this.submitted = false),
        this.websiteservice
          .findWebsitesByUser(params["uid"])
          .subscribe((websites: Website) => {
            this.websites = websites;
          });
    });
  }

  //Create user
  createWebsite() {
    const new_website: Website = {
      name: this.name,
      description: this.description,
      developerId: this.uid
    };
    this.websiteservice
      .createWebsite(new_website)
      .subscribe((website: Website) => {
        this.router.navigate(["/user/" + this.uid + "/website"]);
      });
  }
}
