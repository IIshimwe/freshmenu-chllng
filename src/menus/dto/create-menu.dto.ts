import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateMenuDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly categoryId: number;

    @IsNumber()
    readonly price: number;
}
