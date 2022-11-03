import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  numberOfColumns: number = 3;

  cards: Card[] = [
    { id: 1, title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content 1', icon: 'home' },
    { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', content: 'Content 2', icon: 'home' },
    { id: 3, title: 'Card 3', subtitle: 'Subtitle 3', content: 'Content 3', icon: 'home' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
