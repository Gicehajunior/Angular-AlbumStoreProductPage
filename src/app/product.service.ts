import { Injectable } from '@angular/core';
import { Http } from '@angular/core';
import { Response } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id){
    return this._http.get(this._albumUrl).response.json();
  }
}
