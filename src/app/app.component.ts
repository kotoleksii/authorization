import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authorization';
  public routes: string[] = ['register', 'login'];

  constructor(private router: Router) {
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
