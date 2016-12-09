import { User } from './models/index';
import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class Users {
  public heading = 'Github Users';
  public users: User[] = [];

  constructor(private http: HttpClient) { }

  public async activate() {
    let res = await this.http.fetch('users');
    this.users = await res.json();
  }
}
