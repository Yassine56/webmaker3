import { Injectable } from "@angular/core";
import { Website } from "../models/website.model.client";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class WebsiteService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;
  //Function to create a website
  createWebsite(website: Website) {
    const url = this.baseUrl + "/api/website";
    return this.http.post(url, website).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to find websites by userId
  findWebsitesByUser(userId: string) {
    const url = this.baseUrl + "/api/user/" + userId + "/website";
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to find website by website id
  findWebsiteById(websiteId: string) {
    const url = this.baseUrl + "/api/website/" + websiteId;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to update a website
  updateWebsite(website: Website) {
    const url = this.baseUrl + "/api/website";
    return this.http.put(url, website).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to delete a website
  deleteWebsite(websiteId: string) {
    const url = this.baseUrl + "/api/website/wid=" + websiteId;
    return this.http.delete(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
}
