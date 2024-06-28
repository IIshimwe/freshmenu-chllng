import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Category } from '../categories/category.entity';
import { Product } from '../products/product.entity';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Category, (category) => category.menus)
    category: Category;

    @OneToMany(() => Product, (product) => product.menu)
    products: Product[];

    @Column('decimal', { precision: 5, scale: 2, nullable: true })
    price: number;
}
