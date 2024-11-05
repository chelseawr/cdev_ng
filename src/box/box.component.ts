import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/pro-solid-svg-icons';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdjScrollbar } from '../adjScollbar/adjScrollbar.component';
import { ContactButtonComponent } from '../contactButton/contactButton.component';

@Component({
  selector: 'box',
  standalone: true,
  imports: [
    MatButtonModule,
    ContactButtonComponent,
    FontAwesomeModule,
    AdjScrollbar,
    ContactButtonComponent,
  ],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  // change source path to Amplify hosted file /assets
  sourcePath =
    'https://github.com/chelseawr/cdev_ng/blob/master/src/assets/May2024-resume.pdf';
  fileName = 'May2024-resume.pdf';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
}
