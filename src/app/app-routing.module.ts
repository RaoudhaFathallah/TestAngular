import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RestComponent } from './rest/rest.component';

const routes: Routes = [
  //{path : 'rest' , component: RestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents =[RestComponent]


