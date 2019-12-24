import { Component, Input } from '@angular/core';
import CommitDetails from "../../entities/CommitDetails";

@Component({
  selector: 'commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.less']
})
export default class CommitListComponent {
    @Input() commits: CommitDetails[];
}
