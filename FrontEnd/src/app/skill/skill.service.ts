import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Perfil } from '../models/Perfil';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends AppService {

  constructor(private Http: HttpClient) {
    super();
  }

  getSkills(): Observable<Skill[]> {
    return this.Http.get<Skill[]>(this.APIUrl + "/get_skills/");
  }
}
