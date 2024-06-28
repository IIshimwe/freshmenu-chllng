import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Category> {
        return this.categoryService.findOne(id);
    }

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = new Category();
        category.name = createCategoryDto.name;
        return this.categoryService.create(category);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.categoryService.remove(id);
    }
}
