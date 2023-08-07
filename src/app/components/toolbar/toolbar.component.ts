import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements AfterViewInit {

  
  constructor() { }

  @ViewChild('hr') hr!:ElementRef;

  ngAfterViewInit(): void {
    setInterval(() => {
      const date:Date = new Date;
      this.hr.nativeElement.innerText = date.toLocaleTimeString('es-EU',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
      })
    }, 1000);
  }


  tiempo = new Date();
  diaSemana = this.tiempo.toDateString();

}
