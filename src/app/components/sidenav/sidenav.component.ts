import { Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MenuItems } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @ViewChild("contenedorSideNav") contenedorSideNav!: ElementRef;
  @ViewChild("subMenu2") subMenu!: ElementRef;
  @ViewChild("disableBtn") disableBtn!: ElementRef;
  @ViewChild("disableBtnDown") disableBtnDown!: ElementRef;
  show: Boolean = false;

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
      icon: "../../../assets/card-wallet.svg",
      subMenu: [
        {
          ruta: "#",
          nombre: "item1",
        },
        {
          ruta: "#",
          nombre: "item2",
        },
        {
          ruta: "#",
          nombre: "item3",
        },
      ]
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
    let disableBtnSubMenu = this.disableBtn.nativeElement;
    let disableBtnSubMenu2 = this.disableBtnDown.nativeElement;
    this.render.addClass(contenedorNav, "showSideNavClass");
    this.render.addClass(disableBtnSubMenu, "disableBtnSubMenu");
    this.render.addClass(disableBtnSubMenu2, "disableBtnSubMenu");
    this.show = true
    console.log(this.show);
  }

  disableSideNav() {
    let jj = this.contenedorSideNav.nativeElement;
    let disableBtnSubMenu = this.disableBtn.nativeElement;
    let disableBtnSubMenu2 = this.disableBtnDown.nativeElement;
    this.render.removeClass(jj, "showSideNavClass");
    this.render.removeClass(disableBtnSubMenu, "disableBtnSubMenu");
    this.render.removeClass(disableBtnSubMenu2, "disableBtnSubMenu");
    this.show = false
  }

  subMenuShow() {
    let secondMenu = this.subMenu.nativeElement;
    this.render.removeClass(secondMenu, "subMenuHidden");
    this.render.addClass(secondMenu, "subMenuShow");
  }

  disableSubMenu() {
    let secondMenu = this.subMenu.nativeElement;
    this.render.addClass(secondMenu, "subMenuHidden");
    this.render.removeClass(secondMenu, "subMenuShow");
  }




}
