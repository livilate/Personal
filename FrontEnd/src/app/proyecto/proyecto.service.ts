import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService extends AppService {

  constructor(private Http: HttpClient) {
    super();
  }

  getProyectos(): Observable<any[]> {
    return this.Http.get<Proyecto[]>(this.APIUrl + "/get_proyectos/");
  }
}
