import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menus')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get()
    findAll(): Promise<Menu[]> {
        return this.menuService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Menu> {
        return this.menuService.findOne(id);
    }

    @Post()
    create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
        const menu = new Menu();
        menu.name = createMenuDto.name;
        menu.category = { id: createMenuDto.categoryId } as any;
        menu.price = createMenuDto.price;
        return this.menuService.create(menu);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.menuService.remove(id);
    }

    @Get('filter/category/:categoryId')
    filterByCategory(@Param('categoryId') categoryId: number): Promise<Menu[]> {
        return this.menuService.filterByCategory(categoryId);
    }

    @Get('filter/price')
    filterByPrice(
        @Query('min') min: number,
        @Query('max') max: number,
    ): Promise<Menu[]> {
        return this.menuService.filterByPrice(min, max);
    }

    // @Get('search')
    // searchByName(@Query('name') name: string): Promise<Menu[]> {
    //     return this.menuService.searchByName(name);
    // }

    @Get('search')
    searchByName(@Query('name') name: string): Promise<Menu[]> {
        return this.menuService.searchByName(name);
    }
}
