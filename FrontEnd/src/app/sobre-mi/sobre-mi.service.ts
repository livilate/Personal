import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Perfil } from '../models/Perfil';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService extends AppService {

  constructor(private Http: HttpClient) {
    super();
  }

  getPerfiles(): Observable<any[]> {
    return this.Http.get<Perfil[]>(this.APIUrl + "/get_perfiles/");
  }

  downloadResume(path: string): Observable<any>{
    var params = new HttpParams();

    params = params.append('path', path);

    return this.Http.get<any>(this.APIUrl + "/DownloadCV/", {params});
  }
}
