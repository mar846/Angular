import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { IGames } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  test():Observable<any>{
    return of("test");
  }
  getGames(search:string):Observable<IGames[]>{
    let body = new HttpParams();
    body = body.set('s',search)
    return this.http.post<IGames[]>('http://localhost/pmn/uas/getgames.php',body);
  }
  getGamesDetail(id:string):Observable<IGames[]>{
    let body = new HttpParams();
    body = body.set('id',id)
    return this.http.post<IGames[]>('http://localhost/pmn/uas/getgamesdetail.php',body);
  }
  getWishlist():Observable<IGames[]>{
    let body = new HttpParams();
    return this.http.post<IGames[]>('http://localhost/pmn/uas/getWishlist.php',body);
  }
  like(id:string, v:string):Observable<IGames[]>{
    let body = new HttpParams();
    body = body.set('id',id);
    body = body.set('v',v);
    return this.http.post<IGames[]>('http://localhost/pmn/uas/like.php',body);
  }
  wishlist(id:string, v:string):Observable<IGames[]>{
    let body = new HttpParams();
    body = body.set('id',id);
    body = body.set('v',v);
    return this.http.post<IGames[]>('http://localhost/pmn/uas/wishlist.php',body);
  }
  done(id:string, v:string):Observable<IGames[]>{
    let body = new HttpParams();
    body = body.set('id',id);
    body = body.set('v',v);
    return this.http.post<IGames[]>('http://localhost/pmn/uas/done.php',body);
  }
}
