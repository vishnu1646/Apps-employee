import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddemployeeComponent } from '../addemployee/addemployee.component';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent {

  constructor(public dialog: MatDialog,private cdr:ChangeDetectorRef){
  
  }

  employees: Employee[] = [
    { id: 1, name: 'John Doe', status: 'active', designation: 'Developer', location: 'New York' },
    { id: 2, name: 'Jane Smith', status: 'inactive', designation: 'Manager', location: 'Los Angeles' },
    { id: 3, name: 'Mike Johnson', status: 'temporarily suspended', designation: 'Designer', location: 'Chicago' },
    { id: 4, name: 'Emily Davis', status: 'terminated', designation: 'Developer', location: 'San Francisco' },
  ];

  dataSource = this.employees
  displayedColumns: string[] = ['id','name','status','designation','location','actions'];

  filteredEmployees:Employee[]=this.employees;
  // activeEmployees:Employee[]=[]
Ids:number[]=[]
designations:string[]=[]
locations:string[]=[]
uniqueDesignations:string[]=[]
uniqueLocations:string[]=[]


ngOnInit(){
  this.uniqueDesignations = this.getUniquedesig()
  this.uniqueLocations= this.getUniquelocation()
}

  activeEmployees:Employee[]=this.employees.filter(emp=>emp.status==='active')
  inactiveEmployees:Employee[]=this.employees.filter(emp=>emp.status==='inactive')
  suspendedEmployees:Employee[]=this.employees.filter(emp=>emp.status==='temporarily suspended')
  terminatedEmployees:Employee[]=this.employees.filter(emp=>emp.status==='terminated')


applyFilter(): void {
  const selectedIds = Array.from(document.querySelectorAll('#employeeIds option:checked'), (option: Element) => Number((option as HTMLOptionElement).value));
  const selectedDesignations = Array.from(document.querySelectorAll('#designations option:checked'), (option: Element) => String((option as HTMLOptionElement).value));
  const selectedLocations = Array.from(document.querySelectorAll('#locations option:checked'), (option: Element) => String((option as HTMLOptionElement).value));

  if (selectedIds.length > 0 || selectedDesignations.length > 0 || selectedLocations.length>0) {
    this.filteredEmployees = this.employees.filter(emp => {
      return (
        (selectedIds.length === 0 || selectedIds.includes(emp.id)) &&
        (selectedDesignations.length === 0 || selectedDesignations.includes(emp.designation)) &&
        (selectedLocations.length === 0 || selectedLocations.includes(emp.location))
       );
    });
  } else {
    this.filteredEmployees = this.employees;
  }
}

getUniquedesig(){
  const desiggroup = new Set<string>()
  this.employees.forEach(employee=>{
    desiggroup.add(employee.designation)
  })
  return Array.from(desiggroup)
}

getUniquelocation(){
  const uniqueLoc = new Set <string>()
  this.employees.forEach(employee=>{
    uniqueLoc.add(employee.location)
  })
  return Array.from(uniqueLoc)
}


updatedId:any
openDialog() {
 const dialogRef= this.dialog.open(AddemployeeComponent);
       dialogRef.afterClosed().subscribe((updatedData: any) => {
        console.log(updatedData.empname);
        const newEmployee = updatedData.empname
       this.employees = [...this.employees,newEmployee]
       this.applyFilter();
       this.cdr.detectChanges()
       });

}

deleteEmployee(employeeId: number): void {
  this.employees = this.employees.filter(employee => employee.id !== employeeId);
  this.applyFilter(); 
  this.cdr.detectChanges();
}

editingEmployeeId: number | null = null;
employeeCopy: Employee | null = null;

editEmployee(employee: Employee): void {
  this.editingEmployeeId = employee.id;
  this.employeeCopy = { ...employee };
}
saveEmployee(): void {
  if (this.employeeCopy) {
    const index = this.employees.findIndex(emp => emp.id === this.employeeCopy!.id);
    if (index > -1) {
      this.employees[index] = this.employeeCopy!;
      this.applyFilter();
      this.cdr.detectChanges();
    }
  }
  this.editingEmployeeId = null;
  this.employeeCopy = null;
}

cancelEdit(): void {
  this.editingEmployeeId = null;
  this.employeeCopy = null;
}
}
 




export interface Employee {
  id: number;
  name: string;
  status: 'active' | 'temporarily suspended' | 'inactive' | 'terminated';
  designation: string;
  location: string;
}


