import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor( 
    private route:ActivatedRoute
  ) {
   
   }

   ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.product = products[+params.get('productId')];
      });
    }

}