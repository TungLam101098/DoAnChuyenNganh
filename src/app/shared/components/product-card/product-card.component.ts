import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';
import { Component, Input } from '@angular/core';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-carts') shoppingCart: ShoppingCart;
  products: Product[];
  constructor(private cartService: ShoppingCartService, private productService: ProductService) { 
    this.productService.getAll()
    .subscribe(products => {
      this.products = products;
    });
    console.log(this.products);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  setHeight() {
    if(this.showActions) return 200;
    else
    return 400;
  }
  setWidth() {
    if(this.showActions) return 300;
    else
    return 400;
  }

}

