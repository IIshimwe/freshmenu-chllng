// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';

// @Module({
//     imports: [
//         ConfigModule.forRoot(),
//         TypeOrmModule.forRootAsync({
//             imports: [ConfigModule],
//             inject: [ConfigService],
//             useFactory: (configService: ConfigService) => ({
//                 type: 'postgres',
//                 host: configService.get('DB_HOST'),
//                 port: +configService.get('DB_PORT'),
//                 username: configService.get('DB_USERNAME'),
//                 password: configService.get('DB_PASSWORD'),
//                 database: configService.get('DB_NAME'),
//                 entities: [join(process.cwd(), 'dist/**/*.entity.js')],
//                 // do NOT use synchronize: true in real projects
//                 synchronize: true,
//             }),
//         }),
//     ],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './menus/menu.module';
import { CategoryModule } from './categories/category.module';
import { CartModule } from './carts/cart.module';
import { ProductModule } from './products/product.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            autoLoadEntities: true,
            synchronize: true,
        }),
        MenuModule,
        CategoryModule,
        CartModule,
        ProductModule,
    ],
})
export class AppModule {}
