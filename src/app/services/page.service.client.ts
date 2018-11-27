import { Page } from "../models/page.model.client";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class PageService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;
  //Function to create a page
  createPage(page: Page) {
    const url = this.baseUrl + "/api/page";
    return this.http.post(url, page).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  //Function to find a page by website Id
  findPagesByWebsiteId(websiteId: string) {
    const url = this.baseUrl + "/api/website/" + websiteId + "/page";
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to find a page by page Id
  findPageById(pageId: string) {
    const url = this.baseUrl + "/api/page/" + pageId;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Funtion to update a page
  updatePage(page: Page) {
    const url = this.baseUrl + "/api/page";
    return this.http.put(url, page).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Funtion to delete a page by page Id
  deletePage(pageId: string) {
    const url = this.baseUrl + "/api/page/pid=" + pageId;
    return this.http.delete(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
}
