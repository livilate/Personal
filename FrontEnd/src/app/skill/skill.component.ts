import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseComponent } from '../common/base-component/base-component';
import { Skill } from '../models/Skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers: [SkillService]
})
export class SkillComponent extends BaseComponent implements OnInit {

  constructor(protected service: SkillService) { 
    super();
  }

  skills: Skill[];
  apiUrl: string = environment.baseUrl;
  imgUrl: string;
  getScreenWidth: any;
  getScreenHeight: any;

  ngOnInit(): void {
    this.getSkills()
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  public getSkills(){
    try {
      this.subscriptionDropDowns = this.service.getSkills().subscribe(
        result => {
          this.skills = result;
          console.log("skills, ", this.skills);
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
