import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import RepoDetails from "../entities/RepoDetails";
import CommitDetails from "../entities/CommitDetails";

@Injectable({
  providedIn: 'root'
})
export default class ApplicationDataService {

  constructor(private _http: HttpClient) { }

  getRepositoryData(): Observable<any> {
    return this._http.get("https://api.github.com/repos/angular/angular");
  }

  getCommitData(): Observable<any> {
    return this._http.get("https://api.github.com/repos/angular/angular/commits")
  }

  repositoryToObjectMapper(res: any): RepoDetails {
    var repositoryDetails = new RepoDetails()
    repositoryDetails.avatarUrl = res['organization']['avatar_url'];
    repositoryDetails.ownerLogin = res['owner']['login'];
    repositoryDetails.repositoryName = res['name'];
    repositoryDetails.homePage = res["homepage"];
    repositoryDetails.repoSize = res["size"];
    repositoryDetails.subscribersCount = res["subscribers_count"];
    repositoryDetails.defaultBranch = res["default_branch"];
    repositoryDetails.openIssueCount = res["open_issues_count"];
    repositoryDetails.language = res["language"];
    return repositoryDetails;
  }

  commitToListMapper(commitList: any): CommitDetails[] {
    let commitReturnList: CommitDetails[] = [];
    commitList.forEach(commitData => {
      let singleCommit: CommitDetails = new CommitDetails();
      singleCommit.author = commitData.commit.author.name;
      singleCommit.avatarUrl = commitData.author.avatar_url;
      singleCommit.message = commitData.commit.message
      singleCommit.email = commitData.commit.author.email
      commitReturnList.push(singleCommit);
    });

    return commitReturnList;
  }
}
