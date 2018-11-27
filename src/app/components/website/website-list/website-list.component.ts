import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { ActivatedRoute } from "@angular/router";
import { Website } from "src/app/models/website.model.client";

@Component({
  selector: "app-website-list",
  templateUrl: "./website-list.component.html",
  styleUrls: ["./website-list.component.css"]
})
export class WebsiteListComponent implements OnInit {
  uid: string;
  websites: Website[];
  constructor(
    private websiteservice: WebsiteService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]),
        this.websiteservice
          .findWebsitesByUser(this.uid)
          .subscribe((websites: Website[]) => {
            this.websites = websites;
          });
    });
  }
}
