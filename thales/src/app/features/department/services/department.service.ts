
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private API_URL;
  constructor(private http: HttpClient) {
    this.API_URL = baseUrl;

  }

  getDepartments(currentPage:any,pageSize:any): Observable<any> {
    let params = new HttpParams();
params = params.append('page', currentPage);
params = params.append('limit', pageSize);
    return this.http.get<any>(`${this.API_URL}/department/`, {params: params}
    );
  }

  getDepartmentById(_id:any): Observable<any> {

    return this.http.get<any>(`${this.API_URL}/department/${_id}` );
  }


  addDepartment(departmentObj: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/department`, departmentObj, {});
  }
  updateDepartment(departmentObj: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/department`, departmentObj, {});
  }

  removeDepartment(departmentObj: any): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/department/${departmentObj._id}`);
  }

  // create(appointment: any): Observable<HttpResponseBody> {
  //   var obj = {
  //     "number": appointment.contactNumber
  //   }
  //   appointment.contactNumber = obj;
  //   appointment.duration = 30;
  //   appointment.preRegistration.doctorMcr = "EXT_APP_DUMMY_MCR";
  //   appointment.preRegistration.remark = appointment.remark;
  //   if (appointment.userId.idType == null || appointment.userId.idType == "" || appointment.userId.number == null || appointment.userId.number == "") {
  //     appointment.userId.idType = "OTHER";
  //     appointment.userId.number = appointment.patientIdentifier;
  //   }
  //   return this.http.post<HttpResponseBody>(
  //     `${this.API_URL}/cms-dua/patient/pre-registration/create`,
  //     JSON.stringify(appointment)
  //   );
  // }



  // updatePassword(oldPassword: string, newPassword: string): Observable<HttpResponseBody> {
  //   let oldPasswordValue = oldPassword;
  //   let newPasswordValue = newPassword;
  //   return this.http.post<HttpResponseBody>(`${this.API_URL}/aacore/user/change/password/${oldPasswordValue}/${newPasswordValue}`, {});
  // }

  // remove(appointmentId: any): Observable<HttpResponseBody> {
  //   let obj = {
  //     "appointmentId": appointmentId,
  //     "action": "CANCELED"
  //   }
  //   return this.http.post<HttpResponseBody>(`${this.API_URL}/cms-dua/patient/pre-registration/update`, JSON.stringify(obj));
  // }

  // updatePassword1(oldPassword: string, newPassword: string): Observable<HttpResponseBody> {
  //   let oldPasswordValue = oldPassword;
  //   let newPasswordValue = newPassword;
  //   return this.http.post<HttpResponseBody>(`${this.API_URL}/aacore/user/change/password/${oldPasswordValue}/${newPasswordValue}`, {});
  // }
}

