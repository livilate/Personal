import { Component, HostListener, OnInit } from '@angular/core';
import {BaseComponent} from "../common/base-component/base-component";
import { Menu } from "../models/Menu";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BaseComponent implements OnInit {

  menu: Array<any> = new Array<Menu>();
  getScreenWidth: any;
  getScreenHeight: any;

  ngOnInit(): void {
    this.setMenu();
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  setMenu() {
    this.menu = [
      {Nombre: "Sobre Mi", Link: null},
      {Nombre: "main", Link: "/proyectos/"},
      {Nombre: "Experiencia", Link: null},
      {Nombre: "main", Link: null},
    ]
  }

  public styleObject(){
    return {
      'min-height.px': this.getScreenHeight,
      'max-height.px': this.getScreenHeight,
    }
  }
}
