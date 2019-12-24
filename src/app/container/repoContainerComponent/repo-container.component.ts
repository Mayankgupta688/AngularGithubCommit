import { Component, Input } from '@angular/core';
import CommitDetails from "../../entities/CommitDetails";
import RepoDetails from "../../entities/RepoDetails";

@Component({
  selector: 'repo-container',
  templateUrl: './repo-container.component.html',
  styleUrls: ['./repo-container.component.less']
})
export default class RepoContainerComponent {
  @Input() commits: CommitDetails[];
  @Input() repositorydetails: RepoDetails;
}
