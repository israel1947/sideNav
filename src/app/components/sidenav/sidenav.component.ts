import { Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @ViewChild("contenedorSideNav") contenedorSideNav!: ElementRef;
  show: Boolean = false

  constructor(private render: Renderer2) { }

  showSidenav() {
    let contenedorNav = this.contenedorSideNav.nativeElement;
    this.render.addClass(contenedorNav, "showSideNavClass");
    this.show = true
    console.log(this.show);
  }

  disableSideNav() {
    let jj = this.contenedorSideNav.nativeElement;
    this.render.removeClass(jj, "showSideNavClass")
    this.show = false
  }
}
