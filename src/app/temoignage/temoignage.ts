import { Component } from '@angular/core';
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-temoignage',
  imports: [],
  templateUrl: './temoignage.html',
  styleUrl: './temoignage.css',
})
export class Temoignage {
testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marcelle Ndoumbe",
      role: "Formatrice Culinaire",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Le Ndolè aux crevettes est tout simplement une tuerie ! On retrouve exactement l'amertume maîtrisée et le goût authentique du pays. Je recommande les yeux fermés.",
      date: "Il y a 2 jours"
    },
    {
      id: 2,
      name: "Christian Tchakounté",
      role: "Client Fidèle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Le Poulet DG est incroyable, les plantains sont fondants à souhait. Le système de commande sur le site est super fluide.",
      date: "Il y a 1 semaine"
    },
    {
      id: 3,
      name: "Amadou Ibrahim",
      role: "Chef d'Entreprise",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 4,
      comment: "Le Soya de Bœuf me rappelle les soirées de Yaoundé. Épices parfaites, viande tendre. Un sans-faute !",
      date: "Il y a 2 semaines"
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Génère un tableau d'étoiles pour l'affichage HTML
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
