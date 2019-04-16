
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class GameCreatorService {
   constructor(private http: HttpClient) {}

   baseUrl = 'http://127.0.0.1:3000';
   rooms: object[] = [];
   isPlaying: boolean = false;


   createRoom(data): Observable<any> {
      return this.http.post<any>(this.baseUrl + '/games', data);
   }

   getRooms(): Observable<any> {
      return this.http.get<any>(this.baseUrl + '/games');
   }

}
