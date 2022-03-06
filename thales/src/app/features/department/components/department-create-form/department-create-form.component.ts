import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';

@Component({
	selector: 'app-department-create-form',
	templateUrl: './department-create-form.component.html',
	styleUrls: ['./department-create-form.component.scss']
})
export class DepartmentCreateFormComponent implements OnInit {
	departmentId!: any;
	departmentObject!: any;
	departmentsList!: Array<Department>;
	departmentForm = this.formBuilder.group({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		phoneNumber: new FormControl('', [Validators.required]),
	});
	constructor(private formBuilder: FormBuilder,
		private departmentService: DepartmentService,
		private toastr: ToastrService,
		private _router: Router
	) {
	
	}

	ngOnInit() {


	}


	onSubmit() {
		if (this.departmentForm.valid) {
			const formObject = this.departmentForm.value;

			this.departmentObject = {
				"name": formObject.name,
				"email": formObject.email,
				"phoneNumber": formObject.phoneNumber.toString()
			};

			this.departmentService.addDepartment(this.departmentObject).subscribe(
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
