import { ApiProperty } from '@nestjs/swagger';
import { AwardDto } from 'src/awards/dto/award.dto';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  awards: AwardDto[];
}
