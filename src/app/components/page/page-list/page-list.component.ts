import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/services/page.service.client";
import { Page } from "src/app/models/page.model.client";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-list",
  templateUrl: "./page-list.component.html",
  styleUrls: ["./page-list.component.css"]
})
export class PageListComponent implements OnInit {
  uid: string;
  wid: string;
  page: Page;
  pages: Page[];
  constructor(
    private pageservice: PageService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]),
        (this.wid = params["wid"]),
        this.pageservice
          .findPagesByWebsiteId(this.wid)
          .subscribe((pages: Page[]) => {
            this.pages = pages;
            console.log(this.pages);
          });
    });
  }
}
