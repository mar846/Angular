import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  test():Observable<any>{
    return of("test");
  }
  getGames():Observable<any>{
    return this.http.get('http://localhost/pmn/uas/getgames.php');
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
