import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { BoxComponent } from '../box/box.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import outputs from '../../amplify_outputs.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTooltipModule, MatButtonModule, BoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

// TODO
// download pdf
// swap amp repo
// animate  mobile page
export class AppComponent {
  shiningRed = `rgb(152, 31, 36)`;
  shiningOrange = `rgb(223, 95, 24)`;
  title = 'cdev_ng';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        if (result.matches) {
          // TODO utilize for fancy mobile scroll animation
          console.log('result matches mobile');
        }
      });
  }
}
