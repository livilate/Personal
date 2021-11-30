import { Component, HostListener, OnInit } from '@angular/core';
import { BaseComponent } from '../common/base-component/base-component';
import { Perfil } from '../models/Perfil';
import { SobreMiService } from './sobre-mi.service';
import { environment } from './../../environments/environment'

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
  providers: [SobreMiService]
})
export class SobreMiComponent extends BaseComponent implements OnInit {

  constructor( protected service: SobreMiService){
    super();
  }

  perfiles: Perfil[];
  apiUrl: string = environment.baseUrl;
  imgUrl: string;
  CVUrl: string;

  ngOnInit(): void {
    this.getPerfiles()
  }

  @HostListener('window:resize', ['$event'])

  public getPerfiles(){
    try {
      this.subscriptionDropDowns = this.service.getPerfiles().subscribe(
        result => {
          this.perfiles = result;
          this.imgUrl = this.apiUrl + this.perfiles[0]?.Imagen;
          this.CVUrl = this.apiUrl + this.perfiles[0]?.CV;
      },
        error => {
          console.log(error)
        })
    }
    catch (e){
      console.log(e);
    }
  }

  public downloadResume(){
    try {
      this.subscriptionDropDowns = this.service.downloadResume(this.perfiles[0]?.CV).subscribe(
        result => {
          console.log("hola", result);
          const blob = new Blob([result], { type: 'text/csv' });
          const url= window.URL.createObjectURL(blob);
          window.open(url);
      },
        error => {
          console.log("error", error)
        })
    }
    catch (e){
      console.log(e);
    }
  }

}
