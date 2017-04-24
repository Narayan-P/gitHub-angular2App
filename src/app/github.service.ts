import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  userName: string;
  client_id: string = 'a5dda2c8b8ed9eb0f671';
  client_secret: string = '911747f5c052d1455a897191ef370c075521d929';
  constructor(private _http: Http) {
    this.userName = 'bradtraversy';
    console.log('GitHub service ready');
  }

  public getUser() {
    return this._http.get('http://api.github.com/users/' + this.userName + '?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
          .map(res=> res.json());
  }

  public getRepos() {
    return this._http.get('http://api.github.com/users/' + this.userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
          .map(res => res.json());
  }

  public updateUserName(userName: string) {
    this.userName = userName;
  }
}
