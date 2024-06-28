import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}
