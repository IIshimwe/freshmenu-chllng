import { IsString, IsNumber, IsInt } from 'class-validator';

export class CreateProductDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly price: number;

    @IsInt()
    readonly menuId: number;
}
