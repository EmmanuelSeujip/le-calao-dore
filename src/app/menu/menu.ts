import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importation de ton fichier JSON externe
import menuDataFromJson from '../../assets/data/dishes.json'; 

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu implements OnInit {
  
  // Récupération directe de tes données JSON
  menuData: MenuItem[] = menuDataFromJson;
  
  // Catégorie actuellement sélectionnée ('all' par défaut)
  currentFilter: string = 'all';

  // Liste des onglets de filtrage
  filterTabs = [
    { id: 'all', label: 'Tout le Menu' },
    { id: 'entree', label: 'Entrées' },
    { id: 'plat', label: 'Plats' },
    { id: 'dessert', label: 'Desserts' }
  ];

  ngOnInit(): void {}

  // Change le filtre actif lors du clic
  setFilter(category: string): void {
    this.currentFilter = category;
  }

  // Retourne les plats filtrés selon l'onglet actif
  get filteredItems(): MenuItem[] {
    if (this.currentFilter === 'all') {
      return this.menuData;
    }
    return this.menuData.filter(item => item.category === this.currentFilter);
  }
}