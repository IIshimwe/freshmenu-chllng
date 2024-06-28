import { IsInt, IsPositive, IsOptional } from 'class-validator';

export class UpdateCartDto {
    @IsInt()
    @IsPositive()
    readonly productId: number;

    @IsInt()
    @IsPositive()
    readonly quantity: number;
}
