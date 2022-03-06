import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentEditFormComponent } from './components/department-edit-form/department-edit-form.component';
import { DepartmentCreateFormComponent } from './components/department-create-form/department-create-form.component';
import { DepartmentViewComponent } from './pages/department-view/department-view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: '', component: DepartmentViewComponent },
  { path: 'create', component: DepartmentCreateFormComponent },
  { path: 'edit/:id', component: DepartmentEditFormComponent }
];


@NgModule({
  declarations: [DepartmentCreateFormComponent,
    
    DepartmentViewComponent, DepartmentEditFormComponent],

  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,

    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    NgxPaginationModule
  ]
})
export class DepartmentModule { }
