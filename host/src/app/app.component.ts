import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'host';
  ngOnInit(): void {
    localStorage.setItem('id_token', 'IN PANI PURI THIS WONT BE NEEDED ACTUAL AUTH THRU login will be generated');
  }
}
