import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Stats } from 'src/app/interfaces/stats.interface';
import { PlayerDataService } from 'src/app/_services/player-data.service';
import { default as PLAYERDATA } from '../../_data/players.json';

@Component({
  selector: 'app-player-data-table',
  templateUrl: './player-data-table.component.html',
  styleUrls: ['./player-data-table.component.scss']
})

export class PlayerDataTableComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['position', 'Name', 'GamesPlayed', 'Score'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  playerArray: any = PLAYERDATA.Players;
  statsArray;
  playerData = [];

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

      this.dataSource.data = this.playerData;
      this.dataSource.data.sort((a: any,b: any) => (b.Score - a.Score));

      this.dataSource.data = this.dataSource.data.map((item: any, idx: any) => (
        {
          ...item,
          position: idx + 1,
          player: `${item.Name} ${item.Score} ${idx}`
        }
      ));
    });
  }

  sortData(sort: Sort) {
    this.dataSource.sort = this.sort; 
  }

  filterData(event) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
}
