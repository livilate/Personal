import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Experiencia } from '../models/Experiencia';

@Injectable({
    providedIn: 'root'
})
export class ExperienciaService extends AppService {

    constructor(private Http: HttpClient) {
        super();
    }

    getExperiencia(): Observable<any[]> {
        return this.Http.get<Experiencia[]>(this.APIUrl + "/get_experiencia/");
    }
}
