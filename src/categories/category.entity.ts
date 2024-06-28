// import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Menu } from '../menus/menu.entity';

// @Entity()
// export class Category {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;

//     @OneToMany(() => Menu, (menu) => menu.category)
//     menus: Menu[];
// }

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Menu } from '../menus/menu.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Menu, (menu) => menu.category)
    menus: Menu[];
}
