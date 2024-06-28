import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('carts')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get()
    findAll(): Promise<Cart[]> {
        return this.cartService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Cart> {
        return this.cartService.findOne(id);
    }

    @Post()
    create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
        const cart = new Cart();
        cart.userId = createCartDto.userId;
        cart.products = createCartDto.productIds.map((id) => ({ id }) as any);
        return this.cartService.create(cart);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.cartService.remove(id);
    }
}
