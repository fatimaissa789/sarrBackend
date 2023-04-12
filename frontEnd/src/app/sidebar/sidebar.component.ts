import { Component, OnInit, ViewChild } from '@angular/core';
import { EditpassComponent } from '../shared/editpass/editpass.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showModal = false;
  isopen =false;
  
  toggleModal() {
    this.showModal = !this.showModal;
  }
 
  isopn=false;
  showmodalparams = false;
  toggleModalParams(){
    this.showmodalparams = !this.showmodalparams;
  }

  editpassword (): void {
   /*  this.modal.open() */
    this.isopen=  !this.isopen

  }
  
   close (){
    this.isopen = false
   }
} 
