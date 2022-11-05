import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { PlayerData } from 'src/app/interfaces/player-data.interface';
import { Stats } from 'src/app/interfaces/stats.interface';
import { PlayerDataService } from 'src/app/_services/player-data.service';
import { default as PLAYERDATA } from '../../_data/players.json';

@Component({
  selector: 'app-player-data-table',
  templateUrl: './player-data-table.component.html',
  styleUrls: ['./player-data-table.component.scss']
})
export class PlayerDataTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['orderBy', 'Name', 'GamesPlayed', 'Score'];
  dataSource;
  playerArray: any = PLAYERDATA.Players;
  statsArray;
  playerData: PlayerData[] = [];
  constructor(private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
    this.playerDataService.getPlayerStatsData().subscribe((data: any) => {
      this.statsArray = data;
      for (let i = 0; i < this.playerArray.length; i++) {
        this.playerData.push({
          ...this.playerArray[i],
          ...this.statsArray.Results.find((stat: Stats) => stat.PlayerId === this.playerArray[i].PlayerId)
        });
      }

      this.dataSource = this.playerData;
      this.dataSource.sort((a: any,b: any) => (b.Score - a.Score));
      this.dataSource = this.dataSource.map((item: any, idx: any) => (
        {
          ...item,
          orderBy: idx + 1,
          player: `${item.Name} ${item.Score} ${idx}`
        }
      ));
    });
  }

  sortData(sort: Sort) { 
    console.log(sort);
    this.dataSource.sort = this.sort; 
  }
}
