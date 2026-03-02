import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkspaceDto {
    @ApiProperty({
        description: 'The name of the workspace',
        example: 'My Workspace',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The ID of the owner of the workspace',
        example: '123e4567-e89b-12d3-a456-426614174000',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    ownerId: string;
}