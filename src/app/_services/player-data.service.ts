import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  constructor(private _http: HttpClient) { }

  getPlayerResults() {
    return this._http.get(environment.endpoint);
  }
}
