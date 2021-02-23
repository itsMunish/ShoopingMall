import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:any={
  "id":1,
  "Name":"Levis",
  "Type":"Men Khaki 511 Slim Fit Solid Regular Trousers",
  "Price":2099
}
  constructor() { }

  ngOnInit(): void {
  }

}
