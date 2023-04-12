import { Injectable } from '@angular/core';
//import { Socket } from 'ngx-socket-io';
//import * as  io from 'socket.io-client';
import {Socket, io }from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IotService {

  constructor( ) {
    this.socket = io('ws://localhost:3000');
  }
  private socket: Socket;



// ventilo
  iot() {
    return new Observable(observer => {
      this.socket.on('data', data => {
        observer.next(data);
      });
    });


}
//ventilo
iot1() {
  return new Observable(observer => {
    this.socket.emit('allum', '1');// allumage pompe
    console.log('envoi')
    observer.next()
  });

  }
  iot2() {
    return new Observable(observer => {
      this.socket.emit('allum', '0');// eteindre pompe
      console.log('envoi')
      observer.next()
    });

}


uid() {
  return new Observable(observer => {
    this.socket.on('token', data => {
      observer.next(data);
    });
  });
}

}





