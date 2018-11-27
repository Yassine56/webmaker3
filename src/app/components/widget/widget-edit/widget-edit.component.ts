import { Component, OnInit } from "@angular/core";
import { Widget } from "src/app/models/widget.model.client";
import { WidgetService } from "src/app/services/widget.service.client";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-widget-edit",
  templateUrl: "./widget-edit.component.html",
  styleUrls: ["./widget-edit.component.css"]
})
export class WidgetEditComponent implements OnInit {
  uid: string;
  wgid: string;
  widget: Widget = {
    widgetType: "",
    pageId: "",
    text: "",
    size: 0,
    width: "",
    url: ""
  };

  constructor(
    private widgetservice: WidgetService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.wgid = params["wgid"];
      this.widgetservice
        .findWidgetById(this.wgid)
        .subscribe((widget: Widget) => {
          this.widget = widget;
        });
    });
  }
}
