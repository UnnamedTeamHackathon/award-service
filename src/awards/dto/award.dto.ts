import { ApiProperty } from '@nestjs/swagger';

export class AwardDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image_id: string;
}
