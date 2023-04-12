import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paramArro',
  templateUrl: './paramArro.component.html',
  styleUrls: ['./paramArro.component.css']
})
export class ParamArroComponent implements OnInit {

 //*output tranfert donné enfant vers parent///
 @Output() closed = new EventEmitter();
 @Input()
 showModal =  false;

 on() {
   this.showModal = true;
 }

 close() {
  this.showModal = false;
  this.closed.emit();

} 

MONTH_NAMES = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre et Décembre'
];
DAYS = ['Lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
days = ['Lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
showDatepicker = false;
datepickerValue!: string;
periodearroseValue!: string;
month!: number; // !: mean promis it will not be null, and it will definitely be assigned
year!: number;
no_of_days = [] as number[];
blankdays = [] as number[];
  differenceInDays!: any;
@Output() DateArrosageSlect = new EventEmitter<{date: string}>();

onSubmit() {
  let datepickerperiode = new Date(this.year, this.month + 4,);
  this.periodearroseValue = datepickerperiode.toDateString();
  this.datepickerValue = new Date(this.year, this.month, ).toDateString();
  this.DateArrosageSlect.emit({ date: this.periodearroseValue });
  const datePickerDate = new Date(this.datepickerValue);
this.differenceInDays = Math.floor((datepickerperiode.getTime() - datePickerDate.getTime()) / 8640000000);
localStorage.setItem('savedDay',this.differenceInDays);
localStorage.setItem('savedDate', this.datepickerValue);
 location.reload();
}

initDate() {
  let today = new Date();
  this.month = today.getMonth();
  this.year = today.getFullYear();
  this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
  this.datepickerValue = new Date(this.year, this.month +4, today.getDate()).toDateString();
}


isToday(date: any) {
  const today = new Date();
  const d = new Date(this.year, this.month, date);
  return today.toDateString() === d.toDateString() ? true : false;
}


getDateValue(date: any) {
  let selectedDate = new Date(this.year, this.month , date);
  this.datepickerValue = selectedDate.toDateString();
  this.showDatepicker = false;
  let datepickerperiode = new Date(this.year, this.month +4 , date);
  this.periodearroseValue = datepickerperiode.toDateString();

}



getNoOfDays() {
  const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

  // find where to start calendar day of week
  let dayOfWeek = new Date(this.year, this.month).getDay();
  let blankdaysArray = [];
  for (var i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i);
  }

  let daysArray = [];
  for (var i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  this.blankdays = blankdaysArray;
  this.no_of_days = daysArray;
  
}


trackByIdentity = (index: number, item: any) => item;


counters: any;
constructor() { 

}

ngOnInit(): void {
  this.initDate();
  this.getNoOfDays();

  const savedDate = localStorage.getItem('savedDate');
  if (savedDate) {
    this.datepickerValue = savedDate;
  }
} 



onClick() {
  
  console.log(this.datepickerValue + 90);
  
}

SendDataonChange(event: any) {
  console.log(event.target.value +90 );
}

isopen=false;
showmodalparams = false;
toggleModalParams(){
  this.showmodalparams = !this.showmodalparams;
}

editpassword (): void {
/*  this.modal.open() */
  this.isopen=  !this.isopen

}

}
