import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';

const routes: Routes = [
  {
    path:'',
    component:EmplistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpappRoutingModule { }
