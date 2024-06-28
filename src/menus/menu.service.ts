import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
    ) {}

    findAll(): Promise<Menu[]> {
        return this.menuRepository.find({
            relations: ['category', 'products'],
        });
    }

    async findOne(id: number): Promise<Menu> {
        return this.menuRepository.findOne({
            where: { id },
            relations: ['category', 'products'],
        });
    }

    create(menu: Menu): Promise<Menu> {
        return this.menuRepository.save(menu);
    }

    async remove(id: number): Promise<void> {
        await this.menuRepository.delete(id);
    }

    filterByCategory(categoryId: number): Promise<Menu[]> {
        return this.menuRepository.find({
            where: { category: { id: categoryId } },
            relations: ['category', 'products'],
        });
    }

    filterByPrice(min: number, max: number): Promise<Menu[]> {
        return this.menuRepository
            .createQueryBuilder('menu')
            .where('menu.price BETWEEN :min AND :max', { min, max })
            .getMany();
    }

    searchByName(name: string): Promise<Menu[]> {
        return this.menuRepository
            .createQueryBuilder('menu')
            .where('menu.name ILIKE :name', { name: `%${name}%` })
            .getMany();
    }
}
