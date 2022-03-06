import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { baseUrl } from 'src/environments/environment';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
@Component({
  selector: 'app-department-edit-form',
  templateUrl: './department-edit-form.component.html',
  styleUrls: ['./department-edit-form.component.scss']
})
export class DepartmentEditFormComponent implements OnInit {
  departmentId!: any;
  departmentsList!: Array<Department>;
  departmentObject!: any;
  departmentForm = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  private API_URL;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private _router: Router,
    private http: HttpClient

  ) {
    this.API_URL = baseUrl;
  }

  getallDepartments() {
    this.departmentId = this.route.snapshot.paramMap.get('id');
    this.departmentService.getDepartmentById(this.departmentId).subscribe(
      res => {
        this.departmentsList = res.result;
        this.setFormValues(this.departmentsList);
      },
      err => {
        this.toastr.error(err.error.message ? err.error.message : "")
      }
    );
  }
  ngOnInit() {
    this.getallDepartments();


  }
  search(inputId: any) {
    this.departmentsList = inputId === "" ? this.departmentsList : this.departmentsList.filter((element) => {
      return element._id.toLowerCase().includes(inputId.toLowerCase())
    });
  }
  setFormValues(department: any) {
    this.departmentForm.patchValue({ id: department._id })
    this.departmentForm.patchValue({ name: department.name })
    this.departmentForm.patchValue({ email: department.email })
    this.departmentForm.patchValue({ phoneNumber: department.phoneNumber })
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      const formObject = this.departmentForm.value;

      this.departmentObject = {
        "name": formObject.name,
        "email": formObject.email,
        "phoneNumber": formObject.phoneNumber.toString(),
        "_id": formObject.id
      };

      this.departmentService.updateDepartment(this.departmentObject).subscribe(
        res => {

          this._router.navigate(['/'])
        },
        err => {
          this.toastr.error(err.error.message ? err.error.message : "")
        }
      );
    }
  }
}
