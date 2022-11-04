import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from 'src/app/_services/player-data.service';

@Component({
  selector: 'app-player-data-table',
  templateUrl: './player-data-table.component.html',
  styleUrls: ['./player-data-table.component.scss']
})
export class PlayerDataTableComponent implements OnInit {
  PLAYER_DATA: any[] = [];
  displayedColumns: string[] = ['Position', 'PlayerName', 'GamesPlayed', 'Score'];
  dataSource = this.PLAYER_DATA;

  constructor(private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
    this.playerDataService.getPlayerResults().subscribe((data: any) => {
      console.log(data);
    });
  }

}
