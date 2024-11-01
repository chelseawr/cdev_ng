import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/pro-solid-svg-icons';
import { faChevronDoubleRight } from '@fortawesome/pro-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTooltipModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
// break out card at minimum
export class AppComponent {
  title = 'cdev_ng';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
  faChevronDoubleRight = faChevronDoubleRight;
}
