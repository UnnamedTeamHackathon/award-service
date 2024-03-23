import { ApiProperty } from '@nestjs/swagger';

export class AwardCreateRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  image_id: string;
}