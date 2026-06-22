import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./app-header/app-header";
import { Hero } from "./hero/hero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calao');
}
