import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : any; 
  repos : any[];
  userName : string;
  constructor(private _githubService: GithubService) {
    this.user = false;
   }

  getGitHubUser() {
    console.log('Github service called');
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

  getGitHubReposForUser() {
    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    }); 
  }

  searchUser() {
    this._githubService.updateUserName(this.userName);
    this.getGitHubUser();
    this.getGitHubReposForUser();
  }

  ngOnInit() {
    //this.getGitHubUser();
    //this.getGitHubReposForUser();
  }

}
