import { AfterContentInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  @ViewChild('prod')
  prod: any;

  // constructor(product: Product) {
  //   this.product = product;
  // }

  ngOnInit(): void {
    this.assignTag()
  }

  assignTag(){
    let prodTag = document.getElementById('prodTag');
    prodTag?.classList.add('yell');
    }

}
