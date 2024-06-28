import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Menu } from '../menus/menu.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToOne(() => Menu, (menu) => menu.products)
    menu: Menu;
}
