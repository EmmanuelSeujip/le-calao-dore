import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./app-header/app-header";
import { Hero } from "./hero/hero";
import { Menu } from "./menu/menu";
import { Temoignage } from "./temoignage/temoignage";
import { HoraireComponent } from "./horaire-component/horaire-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Hero, Menu, Temoignage, HoraireComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calao');
}
