import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../common/base-component/base-component';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [CursoService]
})
export class CursoComponent extends BaseComponent implements OnInit {

  constructor(protected service: CursoService) { 
    super();
  }

  cursos: any[];

  ngOnInit(): void {
    this.getCursos();
  }

  public getCursos(){
    try {
      this.subscriptionDropDowns = this.service.getCursos().subscribe(
        result => {
          this.cursos = result
          console.log("cursos, ", this.cursos)
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
