import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString } from "class-validator";

export class Workspace {
    @ApiProperty({
        description: 'The ID of     the workspace',
        example: '123e4567-e89b-12d3-a456-426614174000',
        type: String,
    })
    @IsString()
    id: string;

    @ApiProperty({
        description: 'The name of the workspace',
        example: 'My Workspace',
        type: String,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'The ID of the owner of the workspace',
        example: '123e4567-e89b-12d3-a456-426614174000',
        type: String,
        required: false,
    })
    @IsString()
    @IsOptional()
    ownerId: string;

    @ApiProperty({
        description: 'The date and time the workspace was created',
        example: '2021-01-01T00:00:00.000Z',
        type: Date,
    })
    @IsDate()
    createdAt: Date;

    @ApiProperty({
        description: 'The date and time the workspace was updated',
        example: '2021-01-01T00:00:00.000Z',
        type: Date,
    })
    @IsDate()
    updatedAt: Date;

    @ApiProperty({
        description: 'The date and time the workspace was deleted',
        example: '2021-01-01T00:00:00.000Z',
        type: Date,
        required: false,
    })
    @IsDate()
    @IsOptional()
    deletedAt: Date;
}
