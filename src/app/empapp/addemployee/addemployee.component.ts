import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {
  @Output() saveClicked = new EventEmitter<any>();
  constructor(private dialogRef:MatDialogRef<AddemployeeComponent>){}
  
id:number | undefined
name:string=''
status:string=''
designation:string=''
location:string=''


savebtn(){  
 console.log(this.name);
 let empname ={
  id:this.id,
  name:this.name,
status:this.status,
designation:this.designation,
location:this.location
 }
//  this.saveClicked.emit(this.name)
this.dialogRef.close({empname})
 
}



}
