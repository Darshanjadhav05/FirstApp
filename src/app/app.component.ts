import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayDatadindingComponent } from './two-way-datadinding/two-way-datadinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TwoWayDatadindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp';
}
