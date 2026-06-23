import { Component, OnInit } from '@angular/core';

interface Horaire {
  jour: string;
  ouverture: string;
  fermeture: string;
  ferme: boolean;
}
@Component({
  selector: 'app-horaire-component',
  imports: [],
  templateUrl: './horaire-component.html',
  styleUrl: './horaire-component.css',
})
export class HoraireComponent implements OnInit{
// Données officielles issues du sujet de devoir
  horaires: Horaire[] = [
    { jour: 'Lundi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Mardi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Mercredi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Jeudi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Vendredi', ouverture: '11h00', fermeture: '23h00', ferme: false },
    { jour: 'Samedi', ouverture: '11h00', fermeture: '23h00', ferme: false },
    { jour: 'Dimanche', ouverture: '', fermeture: '', ferme: true }
  ];

  joursFR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  ngOnInit(): void {}

  // Getter pour récupérer le jour actuel en français
  get jourActuel(): string {
    return this.joursFR[new Date().getDay()];
  }
}
