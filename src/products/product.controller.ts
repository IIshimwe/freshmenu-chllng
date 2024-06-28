import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        const product = new Product();
        product.name = createProductDto.name;
        product.price = createProductDto.price;
        product.menu = { id: createProductDto.menuId } as any;
        return this.productService.create(product);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.productService.remove(id);
    }
}
