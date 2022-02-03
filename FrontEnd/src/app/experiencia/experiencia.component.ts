import { Component, HostListener, OnInit } from '@angular/core';
import { BaseComponent } from '../common/base-component/base-component';
import { Experiencia } from '../models/Experiencia';
import { ExperienciaService } from './experiencia.service';
import { PrimeIcons } from "primeng/api";

@Component({
    selector: 'experiencia',
    templateUrl: './experiencia.component.html',
    styleUrls: ['./experiencia.component.css'],
    providers: [ExperienciaService]
})
export class ExperienciaComponent extends BaseComponent implements OnInit {

    constructor(protected service: ExperienciaService) {
        super();
    }

    exp: Experiencia[];
    cardDerecha: boolean = false;

    ngOnInit(): void {
        this.getExperiencia();
    }

    public getExperiencia() {
        try {
            this.service.getExperiencia().subscribe(
                result => {
                    this.exp = result;
                },
                error => {
                    console.log(error)
                })
        }
        catch (e) {
            console.log(e);
        }
    }


    public applyClass() {
        this.cardDerecha = !this.cardDerecha

        if (this.cardDerecha)
            return "timeline-card-right"

        return "timeline-card-left"
    }
}
