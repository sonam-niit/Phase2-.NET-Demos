import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //properties created
  title:string="First Component";
  imageUrl="../assets/test.jpg";
  width:number=400;
  height:number=350;
  price1:number=34;
  price2:number=23;
  price3:number=11;

  showImage:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleImage():void
  {
      this.showImage=!this.showImage; // (this.showImage=true)
      console.log('value of showImage inside the function :: '+this.showImage);
  }
}
