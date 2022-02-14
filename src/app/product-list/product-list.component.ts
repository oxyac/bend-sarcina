import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import * as data from '../../ressources/new-things.json';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  groupByArea!: Product[];
  groups!: any[];


  constructor() {

  }



  ngOnInit(): void {
    this.populate()
    this.divideByArea(this.products)
  }

  populate(){

    const products: Product[] = [];

    for (const objId in data) {
      const product = data[objId];
      products.push(product);
    }

    this.products = products.slice(0, 19);
  }

  divideByArea(pArr: Product[]) {

    const groupBy = (arr: string | any[]) => {
      const zone = Object.create(null),
        result: any[] = [];
      if (typeof arr !== "string") {
        arr.forEach(el => {
          if (!zone[el.areaId]) {
            zone[el.areaId] = [];
            result.push(zone[el.areaId]);
          }
          zone[el.areaId].push(el);
        });
      }
      return result;
    };

    this.groups = groupBy(pArr);

  }
}
