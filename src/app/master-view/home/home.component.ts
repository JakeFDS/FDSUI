import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public recentRecipeThree: string = 'Recent Recipe Three';
  public recentRecipeTwo: string = 'Recent Recipe Two';
  public recentRecipeOne: string = 'Recent Recipe One';
}
