import { Component, OnInit } from '@angular/core';

import ApplicationDataService from "../../services/application-data.service";
import RepoDetails from "../../entities/RepoDetails";
import CommitDetails from "../../entities/CommitDetails";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export default class AppComponent implements OnInit {
  repositoryDetails: RepoDetails;
  commitList: CommitDetails[] = [];

  constructor(private appData: ApplicationDataService) { }

  ngOnInit() {
    this.appData.getRepositoryData().subscribe((res)=>{
      this.repositoryDetails = this.appData.repositoryToObjectMapper(res);
    });

    this.appData.getCommitData().subscribe((commitList: any)=>{
      this.commitList = this.appData.commitToListMapper(commitList);
    });
  }
}
