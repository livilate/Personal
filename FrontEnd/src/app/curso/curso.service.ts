import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Perfil } from '../models/Perfil';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends AppService {

  constructor(private Http: HttpClient) {
    super();
  }

  getCursos(): Observable<any[]> {
    return this.Http.get<any[]>(this.APIUrl + "/get_cursos/");
  }
}
