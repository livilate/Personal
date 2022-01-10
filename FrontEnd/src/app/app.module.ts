import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './common/base-component/base-component'
import { SharedModule } from './common/shared.module';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { CursoComponent } from './curso/curso.component';
import { SkillComponent } from './skill/skill.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { SeparadorComponent } from './separador/separador.component'

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    LayoutComponent,
    BaseComponent,
    SobreMiComponent,
    CursoComponent,
    SkillComponent,
    MenuComponent,
    SeparadorComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
