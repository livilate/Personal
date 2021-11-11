import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'proyectos', component: ProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
