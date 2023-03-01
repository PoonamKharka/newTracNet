import { Body, Controller, Request, Post, Get, Param,UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
@Controller('auth')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post('/product')
    async createProduct(
        @Body('productModelRef') productModelRef: string,
        @Body('product') product: string,
        @Body('aCustomerRef') aCustomerRef: string,
    ): Promise<Product> {
        const result = await this.productsService.createProduct(
            productModelRef,
            product,
            aCustomerRef,
        );
        return result;
    }
}