import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { Website } from "src/app/models/website.model.client";

@Component({
  selector: "app-website-edit",
  templateUrl: "./website-edit.component.html",
  styleUrls: ["./website-edit.component.css"]
})
export class WebsiteEditComponent implements OnInit {
  uid: string;
  wid: string;
  website: Website = {
    name: "",
    description: "",
    developerId: ""
  };
  websites: Website[];
  constructor(
    private websiteservice: WebsiteService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.websiteservice
        .findWebsitesByUser(this.uid)
        .subscribe((websites: Website[]) => {
          this.websites = websites;
        });
      this.websiteservice
        .findWebsiteById(this.wid)
        .subscribe((website: Website) => {
          this.website = website;
          console.log(this.websites);
        });
    });
  }
  //Update a website
  updateWebsite() {
    this.websiteservice.updateWebsite(this.website).subscribe((up: any) => {
      //console.log(website);
      this.router.navigate(["/user/" + this.uid + "/website"]);
    });
  }
  //Delete a website
  deleteWebsite() {
    this.websiteservice
      .deleteWebsite(this.wid)
      .subscribe((websites: Website[]) => {
        this.router.navigate(["user", this.uid, "website"]);
      });
  }
}
