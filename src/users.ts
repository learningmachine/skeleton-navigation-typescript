import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class Users {
  public heading = 'Github Users';
  public users = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  public async activate() {
    let res = await this.http.fetch('users');
    this.users = await res.json();
  }
}
