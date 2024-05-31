import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmpappRoutingModule } from './empapp-routing.module';
import { EmplistComponent } from './emplist/emplist.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    EmplistComponent,
    AddemployeeComponent
  ],
  imports: [
    CommonModule,
    EmpappRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class EmpappModule { }
