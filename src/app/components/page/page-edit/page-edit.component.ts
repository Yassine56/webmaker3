import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/services/page.service.client";
import { Router, ActivatedRoute } from "@angular/router";
import { Page } from "src/app/models/page.model.client";

@Component({
  selector: "app-page-edit",
  templateUrl: "./page-edit.component.html",
  styleUrls: ["./page-edit.component.css"]
})
export class PageEditComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  page: Page = { name: "", title: "", websiteId: "" };

  error_form: boolean;
  constructor(
    private pageservice: PageService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]),
        (this.wid = params["wid"]),
        (this.pid = params["pid"]),
        this,
        this.pageservice.findPageById(this.pid).subscribe((page: Page) => {
          this.page = page;
        });
    });
  }
  //Update a page
  update() {
    this.pageservice.updatePage(this.page).subscribe(
      (up: any) => {
        this.router.navigate([
          "user/" + this.uid + "/website/" + this.wid + "/page"
        ]);
      },
      (error: any) => {
        this.error_form = true;
      }
    );
  }
  //Delete a page
  delete() {
    this.pageservice.deletePage(this.pid).subscribe((del: any) => {
      this.router.navigate([
        "user/" + this.uid + "/website/" + this.wid + "/page"
      ]);
    });
  }
}
