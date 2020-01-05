import { ProductService } from './../../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent  {

  product: Product ;
  id;
  constructor(
    private cartService : ShoppingCartService,
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }
  AddtoCart(){
    this.cartService.addToCart(this.product);
    this.router.navigate(['/']);
  }
  checkOut(){
    this.AddtoCart();
    this.router.navigate(['check-out']);
  }
}
