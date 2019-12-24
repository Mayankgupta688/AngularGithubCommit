import { Component, OnInit } from '@angular/core';
import RepoDetails from "../../entities/RepoDetails";
import ApplicationDataService from "../../services/application-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  repositoryDetails: RepoDetails;

  constructor(private appData: ApplicationDataService) { }

  ngOnInit() {
    this.appData.getRepositoryData().subscribe((res)=>{
      this.repositoryDetails = new RepoDetails()
      this.repositoryDetails.avatarUrl = res['organization']['avatar_url'];
      this.repositoryDetails.ownerLogin = res['owner']['login'];
      this.repositoryDetails.repositoryName = res['name'];
      this.repositoryDetails.homePage = res["homepage"];
      this.repositoryDetails.repoSize = res["size"];
      this.repositoryDetails.subscribersCount = res["subscribers_count"];
      this.repositoryDetails.defaultBranch = res["default_branch"];
      this.repositoryDetails.openIssueCount = res["open_issues_count"];
      this.repositoryDetails.language = res["language"];
    });
  }
}
