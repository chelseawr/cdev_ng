import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxComponent } from '../box/box.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTooltipModule,
    MatButtonModule,
    FontAwesomeModule,
    BoxComponent,
  ],
  template: `
    <div>
      <h1 id="hello">Hello World, my name is</h1>
      <h2 id="name">Chelsea May.</h2>
      <box />
    </div>
  `,
  styleUrl: './app.component.scss',
})
// break out card at minimum
export class AppComponent {
  shiningRed = `rgb(152, 31, 36)`;
  shiningOrange = `rgb(223, 95, 24)`;
  title = 'cdev_ng';
}
