import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import * as data from '../../ressources/new-things.json';

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
    this.divideByArea(this.products);
  }

  populate(){

    const products: Product[] = [];

    for (const objId in data) {
      const product = data[objId];
      products.push(product);
    }

    //handle native json parsing extra elements in array
    this.products = products.slice(0, products.length-2);
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

    let tempArr: any = [];
    for (let i = 0; i < this.groups.length; i++) {
      tempArr = this.groups[i]
      this.groups[i].forEach((val: Product, i: number) => {
        console.log(i, val);

        if(val.joinedWith){
          let matchId = tempArr.findIndex((el: Product) => el.id == val.joinedWith);
          let currId = tempArr.indexOf(val);
          let currEl = tempArr.splice(currId, 1);
          tempArr.splice(matchId+1, 0, currEl[0]);
        }
      })
    }
  }
}
