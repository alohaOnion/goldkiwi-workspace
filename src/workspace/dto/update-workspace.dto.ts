import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWorkspaceDto } from './create-workspace.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateWorkspaceDto extends PartialType(CreateWorkspaceDto) {
    @ApiProperty({
        description: 'The ID of the workspace',
        example: '123e4567-e89b-12d3-a456-426614174000',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    id: string;


    @ApiProperty({
        description: 'The name of the workspace',
        example: 'My Workspace',
        type: String,
    })
    @IsString()
    name: string;
}
