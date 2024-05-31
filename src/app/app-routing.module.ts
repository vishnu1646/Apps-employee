import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpappModule } from './empapp/empapp.module';
import { EmplistComponent } from './empapp/emplist/emplist.component';

const routes: Routes = [
  {
    path:'',
    // component:EmplistComponent
    loadChildren:()=>import('./empapp/empapp.module').then(m=>m.EmpappModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
