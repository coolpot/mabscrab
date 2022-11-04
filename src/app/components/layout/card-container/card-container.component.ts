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
    { id: 1, title: 'Do you love scrabble?', subtitle: 'Subtitle 1', content: 'If all Scrabble tiles ever produced were lined up, they would stretch more than 50,000 miles', icon: 'game' },
    { id: 2, title: 'Call Us', subtitle: 'Subtitle 2', content: 'We are available by phone 9am - 5pm - 01332 322322', icon: 'phone' },
    { id: 3, title: 'Find Us', subtitle: 'Subtitle 3', content: '123 Fake Street, Some Place, Nottingham, NG1 2TR', icon: 'home' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
