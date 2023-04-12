import { Component, OnInit } from '@angular/core';
/* import { MongoClient } from 'mongodb';

import { IotService } from '../service/iot.service'; */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imageSrc = '';  imageSrc2 = ''; imageSrc3 = ''; imageSrc4 = '';
  imageSrcb ='';   imageSrcb2 ='';  imageSrcb3 ='';  imageSrcb4 ='';
  src2 = 'assets/ouvertureporte-56.png'; srcoffp = 'assets/fermer.png'; src1 = 'assets/ouvertureporte-2.png'; srconp = 'assets/ouvrir.png'; 
  src4 = 'assets/ouvrirtoitserre-54.png'; src3= 'assets/ouvrirtoitserre-0.png'; srconpe = 'assets/on.png';  srcoffpe = 'assets/off.png';
  src6 = 'assets/pluie.gif';  src5 = 'assets/arrose.png'; src8 = 'assets/fanrun.gif';  src7= 'assets/fanstop.png';   
  savedCount: string | null | undefined;
  daycount: string | null | undefined;
  temperature : any;
  humidity : any; 
  luminosite : any;
  humiditySol : any;  
  socket: any;
 

/* overture et fermeture de la porte  */
  onClick() {
    if (this.imageSrc === this.src1 && this.imageSrcb === this.srcoffp  ) {
      this.imageSrc = this.src2;
      this.imageSrcb = this.srconp;
      this.socket.emit('etat','1');
    } else {
      this.imageSrc = this.src1;
      this.imageSrcb = this.srcoffp;
      this.socket.emit('etat','0');
      
    }
    
/* overture et fermeture du toit */
    
  }
  onClickt() {
    if (this.imageSrc2 === this.src3 && this.imageSrcb2 === this.srcoffp) {
      this.imageSrc2 = this.src4;
      this.imageSrcb2 = this.srconp;
      this.socket.emit('etat','0');
    } else {
      this.imageSrc2 = this.src3;
      this.imageSrcb2 = this.srcoffp;
      this.socket.emit('etat','1'); 
    }
  /* allumer ou eteindre la pompe  */
    
  }
/*   onClickp() {
    if (this.imageSrc3 === this.src5 && this.imageSrcb3 === this.srcoffpe) {
      this.imageSrc3 = this.src6;
      this.imageSrcb3 = this.srconpe;
      
    } else {
      this.imageSrc3 = this.src5;
      this.imageSrcb3 = this.srcoffpe;
    
    }
  
  /* allumer ou eteindre l'extracteur  */
 /* }
  onClicke() {
    if (this.imageSrc4 === this.src7 && this.imageSrcb4 === this.srcoffpe) {
      this.imageSrc4 = this.src8;
      this.imageSrcb4 = this.srconpe;
      
    } else {
      this.imageSrc4 = this.src7;
      this.imageSrcb4 = this.srcoffpe;
      
    }
  
    
  } */
  /* allumer ou éteindre la pompe */
onClickp() {
  if (this.imageSrc3 === this.src5 && this.imageSrcb3 === this.srcoffpe) {
    this.imageSrc3 = this.src6;
    this.imageSrcb3 = this.srconpe;
    this.socket.emit('pompe', true); // envoyer la commande d'allumage de la pompe
  } else {
    this.imageSrc3 = this.src5;
    this.imageSrcb3 = this.srcoffpe;
    this.socket.emit('pompe', false); // envoyer la commande d'extinction de la pompe
  }
}

/* allumer ou éteindre l'extracteur */
onClicke() {
  if (this.imageSrc4 === this.src7 && this.imageSrcb4 === this.srcoffpe) {
    this.imageSrc4 = this.src8;
    this.imageSrcb4 = this.srconpe;
    this.socket.emit('extracteur', true); // envoyer la commande d'allumage de l'extracteur
  } else {
    this.imageSrc4 = this.src7;
    this.imageSrcb4 = this.srcoffpe;
    this.socket.emit('extracteur', false); // envoyer la commande d'extinction de l'extracteur
  }
}

  constructor(  ) {
   
  
   }
/*    turnOnFan() {
    this.socket.emit('etat','1');
  }
  turnOffFan() {
    this.socket.emit('etat','0');
  } */

  ngOnInit() {
    
    this.imageSrc = this.src1
    this.imageSrc2 = this.src3
    this.imageSrc3 = this.src5
    this.imageSrc4 = this.src7
    this.imageSrcb = this.srcoffp;
    this.imageSrcb2 = this.srcoffp;
    this.imageSrcb3= this.srcoffpe;
    this.imageSrcb4 = this.srcoffpe;
    this.daycount = localStorage.getItem('savedDay');
    this.savedCount = localStorage.getItem('savedDate');

/*     this.websocketService.listen().subscribe((data) => {
      console.log(data);
    
      this.temperature = data["temperature "];
      this.humidity = data["humidity "];
      this.luminosite = data.luminosite;
      this.humiditySol = data["humiditySol"];
    
    });  */
    
  }

}
