import { Component } from '@angular/core';
import { GITHUB_REPO_URL } from "../../contants/github-repo-url";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public repoUrl = GITHUB_REPO_URL;
}