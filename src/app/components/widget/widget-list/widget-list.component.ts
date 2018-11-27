import { Component, OnInit } from "@angular/core";
import { WidgetService } from "src/app/services/widget.service.client";
import { Widget } from "src/app/models/widget.model.client";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-widget-list",
  templateUrl: "./widget-list.component.html",
  styleUrls: ["./widget-list.component.css"]
})
export class WidgetListComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  widgets: Widget[];
  constructor(
    private widgetsevice: WidgetService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]),
        (this.wid = params["wid"]),
        (this.pid = params["pid"]),
        this.widgetsevice
          .findWidgetsByPageId(this.pid)
          .subscribe((widgets: Widget[]) => {
            this.widgets = widgets;
          });
    });
  }

  parseYoutubeSrc(src) {
    //   Transfer video url into embeded video url
    let embedUrl: string = "https://www.youtube.com/embed/";
    const splitUrl: string[] = src.split("/");
    embedUrl += splitUrl[splitUrl.length - 1];

    // Telling browser this src is safe
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
