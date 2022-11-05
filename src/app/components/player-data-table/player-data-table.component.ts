import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['orderBy', 'Name', 'GamesPlayed', 'Score'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  playerArray: any = PLAYERDATA.Players;
  statsArray;
  playerData = [];
  tableData: any;
  topThreePlayers = [];

  constructor(private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
    this.playerDataService.getPlayerStatsData().subscribe((data: any) => {
      this.statsArray = data;
      console.log(this.statsArray);
      for (let i = 0; i < this.playerArray.length; i++) {
        this.playerData.push({
          ...this.playerArray[i],
          ...this.statsArray.Results.find((stat: Stats) => stat.PlayerId === this.playerArray[i].PlayerId)
        });
      }

      this.dataSource.data = this.playerData;
      this.dataSource.data = this.dataSource.data.map((item: any, idx: any) => (
        {
          ...item,
          orderBy: idx + 1,
          player: `${item.Name} ${item.Score} ${idx}`
        }
      ));
      this.dataSource.sort = this.sort;
      this.topThreePlayers = this.dataSource.data.sort((a,b) => b.Score - a.Score).slice(0, 3)
      console.log(this.topThreePlayers);
    });
  }

  sortData(sort: Sort) { 
    console.log(sort);
    this.dataSource.sort = this.sort; 
  }

  filterData(event) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }

}
