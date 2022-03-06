import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.scss']
})
export class DepartmentViewComponent implements OnInit {
  departmentsList!: Array<Department>;
  departmentsListMaster!: Array<Department>;
  searchText = ""
  totalPages:number=0;
  currentPage:number=1;
  limit:number=5;
  constructor(
    private departmentService: DepartmentService,
    private toastr: ToastrService,
  ) {
  }
  ngOnInit(): void {
    this.getallDepartments(this.currentPage, this.limit)
  }

  counter(i: number) {
    return new Array(i);
}
  getallDepartments(currentPage:any,limit:any) {
    this.departmentService.getDepartments(currentPage,limit).subscribe(
      res => {
        this.departmentsList = res.result.results;
        this.departmentsListMaster = res.result.results;
   
        this.totalPages=    res.result?.total?.pages;
      },
      err => {
        this.toastr.error(err.error.message ? err.error.message : "")
      }
    );
  }
  updatePage(currentPageValue:any){
    this.currentPage=currentPageValue;
   this.getallDepartments(this.currentPage, this.limit)
  }

  previousPage(){
    this.currentPage=this.currentPage-1
   this.getallDepartments(this.currentPage, this.limit)
  }


  nextPage(){
    this.currentPage=this.currentPage+1;
   this.getallDepartments(this.currentPage, this.limit)
  }
 
  searchKey(data: string) {
    this.departmentsList = this.departmentsListMaster;
    this.searchText = data;
    this.search();
  }

  search() {
    this.departmentsList = this.searchText === "" ? this.departmentsList : this.departmentsList.filter((element) => {
      return element._id.toLowerCase().includes(this.searchText.toLowerCase())
        || element.name.toLowerCase().includes(this.searchText.toLowerCase())
        || element.email.toLowerCase().includes(this.searchText.toLowerCase())
        || element.phoneNumber.toLowerCase().includes(this.searchText.toLowerCase())

    });
  }
  deleteDepartment(departmentId: any) {

    this.openModalDelete(departmentId);
  }
 

  openModalDelete(department: any) {
    if (confirm("Are you sure to delete  " + department.name + " ?")) {


      this.departmentService.removeDepartment(department).subscribe(
        res => {
          this.getallDepartments(this.currentPage, this.limit);

        },
        err => {
          this.toastr.error(err.error.message ? err.error.message : "")
        }
      );

    }


  }

}
