import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/pro-solid-svg-icons';
import { faChevronDoubleRight } from '@fortawesome/pro-solid-svg-icons';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdjScrollbar } from '../adjScollbar/adjScrollbar.component';

@Component({
  selector: 'box',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule, AdjScrollbar],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
  faChevronDoubleRight = faChevronDoubleRight;
}
