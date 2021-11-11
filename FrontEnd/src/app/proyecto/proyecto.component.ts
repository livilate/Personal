import { Component, OnInit } from '@angular/core';
import {ProyectoService} from './proyecto.service'
import {BaseComponent} from "../common/base-component/base-component";
import {Router} from "@angular/router";
import {Proyecto} from "../models/Proyecto";

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
  providers: [ProyectoService]
})
export class ProyectoComponent extends BaseComponent implements OnInit {

  constructor( protected service: ProyectoService){
    super();
  }

  proyectos: Proyecto[];
  value: Date;

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos(){
    try {
      this.subscriptionDropDowns = this.service.getProyectos().subscribe(
        result => {
          this.proyectos = result
      },
        error => {
          console.log(error)
        })
    }
    catch (e){
      console.log(e);
    }
  }
}
