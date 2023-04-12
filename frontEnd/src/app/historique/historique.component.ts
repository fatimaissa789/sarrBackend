//import prof from '../histo.json';
//import { AuthService } from 'src/app/service/auth.service';
//import { Iot } from 'src/app/models/iot';
import { Component,OnInit} from '@angular/core';


//import { Socket } from 'ngx-socket-io'; 
export interface Histo{
  Date: string
 Temperature: string
 HumiditeA: string
 HumiditeS: string
 Luminosite: string 
}

@Component({
 selector: 'app-historique',
 templateUrl: './historique.component.html',
 styleUrls: ['./historique.component.css'],
 
})
export class HistoriqueComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  [x: string]: any;
  filterTerm!: string;
  profilhis: any=[];
  totalLenght: any;
  page : number=1;
  itemsPerPage:number=6;
  Date!: string;
  Temperature!: string;
  HumidityA!: string;
  HumiditeS!: string;
  Luminosite!: string;
  socket:any;
  public histo!: any[];
}
