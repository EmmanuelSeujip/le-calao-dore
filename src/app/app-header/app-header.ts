import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; 
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  isMenuOpen = false;

  navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Menu', path: '#' },
    { label: 'Témoignages', path: '#' },
    { label: 'Horaires', path: '#' },
    { label: 'Contact', path: '#' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
