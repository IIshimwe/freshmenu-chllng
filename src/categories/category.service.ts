import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) {}

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    findOne(id: any): Promise<Category> {
        return this.categoryRepository.findOne(id);
    }

    create(category: Category): Promise<Category> {
        return this.categoryRepository.save(category);
    }

    async remove(id: number): Promise<void> {
        await this.categoryRepository.delete(id);
    }
}
