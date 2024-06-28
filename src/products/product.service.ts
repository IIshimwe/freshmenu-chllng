import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['menu'] });
    }

    async findOne(id: number): Promise<Product> {
        return this.productRepository.findOne({
            where: { id },
            relations: ['menu'],
        });
    }

    create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }

    async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
