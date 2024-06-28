import { IsString, IsArray, IsInt } from 'class-validator';

export class CreateCartDto {
    @IsString()
    readonly userId: string;

    @IsArray()
    @IsInt({ each: true })
    readonly productIds: number[];
}
