import { Component, OnInit } from "@angular/core";
import { Widget } from "src/app/models/widget.model.client";
import { WidgetService } from "src/app/services/widget.service.client";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-widget-chooser",
  templateUrl: "./widget-chooser.component.html",
  styleUrls: ["./widget-chooser.component.css"]
})
export class WidgetChooserComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;

  constructor(
    private widgetservice: WidgetService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]),
        (this.wid = params["wid"]),
        (this.pid = params["pid"]);
    });
  }

  create(type: string) {
    const widget: Widget = {
      widgetType: type,
      pageId: this.pid
    };
    //console.log(type);

    this.widgetservice.createWidget(widget).subscribe((widget: Widget) => {
      this.router.navigate([
        "user/" +
          this.uid +
          "/website/" +
          this.wid +
          "/page/" +
          this.pid +
          "/widget/" +
          widget.id
      ]);
    });
  }
}
