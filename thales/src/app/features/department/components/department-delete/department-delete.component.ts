import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.scss']
})
export class DepartmentDeleteComponent implements OnInit {
  title!: string;
  departmentId: any;
  constructor(
    public bsModalRef: BsModalRef,
  ) {

  }

  ngOnInit(): void {
  }

  closeModalBox() {
    this.bsModalRef.hide();
  }

}
