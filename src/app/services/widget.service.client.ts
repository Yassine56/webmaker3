import { Injectable } from "@angular/core";
import { Widget } from "../models/widget.model.client";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

// injecting service into module
@Injectable()
export class WidgetService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}
  //Function to create a widget
  createWidget(widget: Widget) {
    const url = this.baseUrl + "/api/widget";
    return this.http.post(url, widget).pipe(
      map((res: Response) => {
        //console.log(res.json());
        return res.json();
      })
    );
  }
  //Function to find a widget by page Id
  findWidgetsByPageId(pageId: string) {
    const url = this.baseUrl + "/api/page/" + pageId + "/widget";
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to find a widget by widget Id
  findWidgetById(widgetId: string) {
    const url = this.baseUrl + "/api/widget/" + widgetId;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to update a widget
  updateWidget(widget: Widget) {
    const url = this.baseUrl + "/api/widget";
    return this.http.put(url, widget).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to delete a widget
  deleteWidget(widgetId: string) {
    const url = this.baseUrl + "/api/widget/" + widgetId;
    return this.http.delete(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
}
