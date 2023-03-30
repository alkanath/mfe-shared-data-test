import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentResponse } from '../model/environment-response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  constructor(private http: HttpClient) { }

  getEnvListForUser() {
    this.getBareEnvironmentListForUser().subscribe(
      {
        next: (response) => {
          if (response?.errors?.length > 0) {
            console.log("ERRORS INCOMING THRU OBJECT!")
            console.log(response?.errors?.toString());
          } else {
            console.log(response);
          }
          if (response?.warnings?.length > 0) {
            console.log(response?.warnings?.toString());
          }
        },
         error: (err) => {
           console.log("Yupppppp error through actual error");
           console.log(err);
         },
         complete: () => {
          console.log("complete")
         }
      }
    )
  }

  getBareEnvironmentListForUser(): Observable<EnvironmentResponse> {
    return this.http.get<EnvironmentResponse>(`http://localhost:3286/pani-puri-api/v1/environments/list`);
  }

}
