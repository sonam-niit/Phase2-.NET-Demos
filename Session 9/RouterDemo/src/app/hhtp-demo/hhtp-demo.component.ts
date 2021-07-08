import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hhtp-demo',
  templateUrl: './hhtp-demo.component.html',
  styleUrls: ['./hhtp-demo.component.css']
})
export class HhtpDemoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
