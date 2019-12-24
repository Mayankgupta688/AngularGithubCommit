import { Component, Input } from '@angular/core';
import CommitDetails from "../../entities/CommitDetails";
import RepoDetails from "../../entities/RepoDetails";

@Component({
  selector: 'repo-details',
  templateUrl: './repo-details.container.html',
  styleUrls: ['./repo-details.container.less']
})
export default class RepoDetailsComponent {
  @Input() repositorydetails: RepoDetails;

  capitalize(stringInput: string) {
    if (typeof stringInput !== 'string') return ''
    return stringInput.charAt(0).toUpperCase() + stringInput.slice(1)
  }
}
