import { del } from "selenium-webdriver/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  //Function to create new user
  createUser(user: any) {
    const url = this.baseUrl + "/api/user";
    return this.http.post(url, user).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to find user id
  findUserById(userId: string) {
    const url = this.baseUrl + "/api/user/" + userId;
    return this.http.get(url).pipe(
      map((res: Response) => {
        console.log(res);
        return res.json();
      })
    );
  }
  //Function to find user by username
  findUserByUsername(username: string) {
    const url = this.baseUrl + "/api/user?username=" + username;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  //Function to find user by username
  findUserByCredentials(username: string, password: string) {
    const url =
      this.baseUrl + "/api/user?username=" + username + "&password=" + password;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to update a user
  updateUser(user) {
    const url = this.baseUrl + "/api/user";
    return this.http.put(url, user).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  //Function to update a user
  deleteUser(userId) {}
}
