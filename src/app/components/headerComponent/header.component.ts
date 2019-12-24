import { Component, Input } from '@angular/core';
import RepoDetails from "../../entities/RepoDetails";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export default class HeaderComponent {
    @Input() repositorydetails: RepoDetails;

    capitalize(stringInput: string) {
      if (typeof stringInput !== 'string') return ''
      return stringInput.charAt(0).toUpperCase() + stringInput.slice(1)
  }
}
