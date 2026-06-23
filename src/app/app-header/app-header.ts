import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  private platformId = inject(PLATFORM_ID);

  isMenuOpen = false;

  navLinks = [
    { label: 'Accueil',     anchor: 'accueil'     },
    { label: 'Menu',        anchor: 'menu'         },
    { label: 'Témoignages', anchor: 'temoignages'  },
    { label: 'Horaires',    anchor: 'horaires'     },
    { label: 'Contact',     anchor: 'contact'      },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(anchor: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    if (anchor === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(anchor);
      if (el) {
        const headerHeight = 70;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

    // Fermer le menu mobile après clic
    this.isMenuOpen = false;
  }
}
