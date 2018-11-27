import { Component, OnInit } from "@angular/core";
import { Page } from "src/app/models/page.model.client";
import { PageService } from "src/app/services/page.service.client";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-new",
  templateUrl: "./page-new.component.html",
  styleUrls: ["./page-new.component.css"]
})
export class PageNewComponent implements OnInit {
  uid: string;
  wid: string;
  page: Page = { name: "", title: "", websiteId: "" };
  name: string;
  title: string;
  pages: Page[];
  error_form: boolean;

  constructor(
    private pageservice: PageService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]), (this.wid = params["wid"]);
    });
  }
  add() {
    this.page.websiteId = this.wid;
    this.pageservice.createPage(this.page).subscribe(
      (create: any) => {
        this.router.navigate(["user", this.uid, "website", this.wid, "page"]);
      },
      (error: any) => (this.error_form = true)
    );
  }
}
