import { Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MenuItems } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @ViewChild("contenedorSideNav") contenedorSideNav!: ElementRef;
  show: Boolean = false

  constructor(private render: Renderer2) { }

  menuItems: MenuItems[] = [
    {
      ruta: "/dashboard/opcion1",
      nombre: "dashboard",
      icon: "../../../assets/dashboard-icon.svg",
    },
    {
      ruta: "/dashboard/opcion2",
      nombre: "card-wallet",
      icon: "../../../assets/card-wallet.svg"
    },
    {
      ruta: "/dashboard/opcion3",
      nombre: "folder",
      icon: "../../../assets/folder.svg"
    },
    {
      ruta: "/dashboard/opcion4",
      nombre: "gitlab",
      icon: "../../../assets/gitlab-full.svg"
    },
    {
      ruta: "/dashboard/opcion5",
      nombre: "apps",
      icon: "../../../assets/app-window.svg"
    }
  ]



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
