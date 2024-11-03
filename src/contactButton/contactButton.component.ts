import { faChevronDoubleRight } from '@fortawesome/pro-solid-svg-icons';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'contact-button',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: './contactButton.component.html',
  styleUrl: './contactButton.component.scss',
})
export class ContactButtonComponent {
  faChevronDoubleRight = faChevronDoubleRight;
}
